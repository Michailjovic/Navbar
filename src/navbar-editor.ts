/**
 * navbar-card-editor
 *
 * Visual configuration editor for Navbar Card.
 * Rendered by HA in the card picker sidebar when the user clicks the
 * pencil icon on a navbar-card tile in Lovelace.
 *
 * Architecture
 * ============
 * - "Card config" (config_id, layout) lives in the Lovelace YAML and is
 *   communicated to HA via the standard `config-changed` CustomEvent.
 * - "Stored config" (tiles, sensors, slots) lives server-side in HA Storage
 *   and is read/written via the navbar WebSocket API.
 *
 * The editor loads the stored config on first render, lets the user edit it
 * inline, and saves it back to the backend with a 500 ms debounce so that
 * the card's live preview updates in near-real-time.
 */

import { LitElement, html, css, nothing, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import type {
  HomeAssistant,
  NavbarCardConfig,
  StoredNavbarConfig,
  TileConfig,
  ActionConfig,
  ActionType,
  SensorOverlayConfig,
} from "./types";
import {
  DEFAULT_CONFIG_ID,
  DEFAULT_MIN_HEIGHT,
  DEFAULT_TRANSITION,
  WS_GET_CONFIG,
  WS_SAVE_CONFIG,
  WS_LIST_CONFIGS,
} from "./const";
import { FILTER_PRESETS, FILTER_SLIDER_RANGES, cssToFilter, filterToCSS } from "./filters";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function emptyTile(): TileConfig {
  return {
    name: "New Tile",
    entity: "",
    background_image: "",
    tap_action: { action: "navigate", navigation_path: "" },
  };
}

function emptyAction(type: ActionType = "none"): ActionConfig {
  return { action: type };
}

// ---------------------------------------------------------------------------
// Editor element
// ---------------------------------------------------------------------------

@customElement("navbar-card-editor")
export class NavbarCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: NavbarCardConfig;

  @state() private _stored: StoredNavbarConfig | null = null;
  @state() private _availableConfigs: string[] = [];
  @state() private _tab: "config" | "tiles" = "config";
  @state() private _expandedTile: number | null = null;
  @state() private _filterTab: Record<number, "on" | "off"> = {};
  @state() private _loading = true;
  @state() private _saving = false;
  @state() private _error: string | null = null;

  private _saveTimer?: ReturnType<typeof setTimeout>;

  // -------------------------------------------------------------------------
  // Lovelace API
  // -------------------------------------------------------------------------

  public setConfig(config: NavbarCardConfig): void {
    this.config = config;
  }

  // -------------------------------------------------------------------------
  // Lifecycle
  // -------------------------------------------------------------------------

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (changed.has("hass") && this.hass && this._loading) {
      void this._initialLoad();
    }
    // Reload stored config when config_id changes
    if (changed.has("config") && this.hass && !this._loading) {
      void this._loadStoredConfig();
    }
  }

  // -------------------------------------------------------------------------
  // Data loading
  // -------------------------------------------------------------------------

  private async _initialLoad(): Promise<void> {
    await Promise.all([this._loadAvailableConfigs(), this._loadStoredConfig()]);
    this._loading = false;
  }

  private async _loadAvailableConfigs(): Promise<void> {
    try {
      const res = await this.hass.callWS<{ configs: string[] }>({
        type: WS_LIST_CONFIGS,
      });
      this._availableConfigs = res.configs ?? [];
    } catch {
      this._availableConfigs = [];
    }
  }

  private async _loadStoredConfig(): Promise<void> {
    const configId = this.config?.config_id ?? DEFAULT_CONFIG_ID;
    try {
      const result = await this.hass.callWS<StoredNavbarConfig>({
        type: WS_GET_CONFIG,
        config_id: configId,
      });
      this._stored = result;
      this._error = null;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("not_found")) {
        this._stored = { tiles: [], layout: { columns: 0, gap: 6 } };
      } else {
        this._error = msg;
      }
    }
  }

  // -------------------------------------------------------------------------
  // Saving
  // -------------------------------------------------------------------------

  private _schedSave(): void {
    if (this._saveTimer) clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => void this._saveNow(), 500);
  }

  private async _saveNow(): Promise<void> {
    if (!this._stored) return;
    this._saving = true;
    try {
      await this.hass.callWS({
        type: WS_SAVE_CONFIG,
        config_id: this.config?.config_id ?? DEFAULT_CONFIG_ID,
        config: this._stored,
      });
    } catch (err: unknown) {
      console.error("[navbar-editor] save failed:", err);
    } finally {
      this._saving = false;
    }
  }

  // -------------------------------------------------------------------------
  // Card-level config changed (fires HA config-changed)
  // -------------------------------------------------------------------------

  private _fireConfigChanged(patch: Partial<NavbarCardConfig>): void {
    const newConfig = { ...this.config, ...patch };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  // -------------------------------------------------------------------------
  // Stored config mutations
  // -------------------------------------------------------------------------

  private _patchStored(patch: Partial<StoredNavbarConfig>): void {
    this._stored = { ...this._stored!, ...patch };
    this._schedSave();
  }

  private _patchTile(idx: number, patch: Partial<TileConfig>): void {
    const tiles = [...(this._stored?.tiles ?? [])];
    tiles[idx] = { ...tiles[idx], ...patch };
    this._patchStored({ tiles });
  }

  private _patchAction(
    idx: number,
    key: "tap_action" | "hold_action" | "double_tap_action",
    patch: Partial<ActionConfig>
  ): void {
    const tile = this._stored!.tiles[idx];
    const current = tile[key] ?? emptyAction();
    this._patchTile(idx, { [key]: { ...current, ...patch } });
  }

  private _patchSensor(tileIdx: number, sIdx: number, patch: Partial<SensorOverlayConfig>): void {
    const tile = this._stored!.tiles[tileIdx];
    const sensors = [...(tile.sensors ?? [])];
    sensors[sIdx] = { ...sensors[sIdx], ...patch };
    this._patchTile(tileIdx, { sensors });
  }

  // -------------------------------------------------------------------------
  // Tile list operations
  // -------------------------------------------------------------------------

  private _addTile(): void {
    const tiles = [...(this._stored?.tiles ?? []), emptyTile()];
    this._patchStored({ tiles });
    this._expandedTile = tiles.length - 1;
  }

  private _deleteTile(idx: number): void {
    const tiles = (this._stored?.tiles ?? []).filter((_, i) => i !== idx);
    this._patchStored({ tiles });
    if (this._expandedTile === idx) this._expandedTile = null;
  }

  private _moveTile(idx: number, dir: -1 | 1): void {
    const tiles = [...(this._stored?.tiles ?? [])];
    const target = idx + dir;
    if (target < 0 || target >= tiles.length) return;
    [tiles[idx], tiles[target]] = [tiles[target], tiles[idx]];
    this._patchStored({ tiles });
    this._expandedTile = target;
  }

  // -------------------------------------------------------------------------
  // Sensor operations
  // -------------------------------------------------------------------------

  private _addSensor(tileIdx: number): void {
    const tile = this._stored!.tiles[tileIdx];
    const sensors = [...(tile.sensors ?? []), {
      entity: "",
      position: "top-right" as const,
    }];
    this._patchTile(tileIdx, { sensors });
  }

  private _deleteSensor(tileIdx: number, sIdx: number): void {
    const tile = this._stored!.tiles[tileIdx];
    const sensors = (tile.sensors ?? []).filter((_, i) => i !== sIdx);
    this._patchTile(tileIdx, { sensors });
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  protected render(): TemplateResult {
    if (this._loading) {
      return html`<div class="loading">Loading...</div>`;
    }
    if (this._error) {
      return html`<div class="error">${this._error}</div>`;
    }

    return html`
      <div class="editor">
        ${this._renderTabs()}
        ${this._tab === "config" ? this._renderConfigTab() : this._renderTilesTab()}
        ${this._saving ? html`<div class="saving-badge">Saving...</div>` : nothing}
      </div>
    `;
  }

  // ── Tabs ──────────────────────────────────────────────────────────────────

  private _renderTabs(): TemplateResult {
    return html`
      <div class="tabs">
        <button
          class="tab ${this._tab === "config" ? "active" : ""}"
          @click=${() => { this._tab = "config"; }}
        >Config</button>
        <button
          class="tab ${this._tab === "tiles" ? "active" : ""}"
          @click=${() => { this._tab = "tiles"; }}
        >Tiles (${this._stored?.tiles?.length ?? 0})</button>
      </div>
    `;
  }

  // ── Config tab ─────────────────────────────────────────────────────────────

  private _renderConfigTab(): TemplateResult {
    const layout = this._stored?.layout ?? {};
    const configId = this.config?.config_id ?? DEFAULT_CONFIG_ID;

    return html`
      <div class="section">
        <div class="section-title">Configuration ID</div>
        <div class="row">
          <div class="field">
            <label>Config ID</label>
            <input
              type="text"
              .value=${configId}
              @change=${(e: Event) =>
                this._fireConfigChanged({ config_id: (e.target as HTMLInputElement).value.trim() || DEFAULT_CONFIG_ID })}
            />
            <span class="hint">Shared across all dashboards using this ID</span>
          </div>
        </div>
        ${this._availableConfigs.length > 1 ? html`
          <div class="row">
            <div class="field">
              <label>Available configs</label>
              <div class="chip-row">
                ${this._availableConfigs.map(id => html`
                  <button
                    class="chip ${id === configId ? "chip-active" : ""}"
                    @click=${() => this._fireConfigChanged({ config_id: id })}
                  >${id}</button>
                `)}
              </div>
            </div>
          </div>
        ` : nothing}
      </div>

      <div class="section">
        <div class="section-title">Layout</div>
        <div class="row two-col">
          <div class="field">
            <label>Columns <span class="hint-inline">(0 = auto flex row)</span></label>
            <input
              type="number" min="0" max="12"
              .value=${String(layout.columns ?? 0)}
              @change=${(e: Event) => {
                const v = parseInt((e.target as HTMLInputElement).value);
                this._patchStored({ layout: { ...layout, columns: isNaN(v) ? 0 : v } });
              }}
            />
          </div>
          <div class="field">
            <label>Gap (px)</label>
            <input
              type="number" min="0" max="32"
              .value=${String(layout.gap ?? 6)}
              @change=${(e: Event) => {
                const v = parseInt((e.target as HTMLInputElement).value);
                this._patchStored({ layout: { ...layout, gap: isNaN(v) ? 6 : v } });
              }}
            />
          </div>
        </div>
      </div>
    `;
  }

  // ── Tiles tab ──────────────────────────────────────────────────────────────

  private _renderTilesTab(): TemplateResult {
    const tiles = this._stored?.tiles ?? [];
    return html`
      <div class="section">
        ${tiles.map((tile, idx) => this._renderTileRow(tile, idx, tiles.length))}
        <button class="btn-add" @click=${this._addTile}>+ Add tile</button>
      </div>
    `;
  }

  private _renderTileRow(tile: TileConfig, idx: number, total: number): TemplateResult {
    const expanded = this._expandedTile === idx;
    return html`
      <div class="tile-row">
        <div class="tile-header" @click=${() => { this._expandedTile = expanded ? null : idx; }}>
          <span class="tile-arrow">${expanded ? "▾" : "▸"}</span>
          <span class="tile-name">${tile.name || "(unnamed)"}</span>
          <span class="tile-entity">${tile.entity ?? ""}</span>
          <span class="tile-actions-row">
            <button class="icon-btn" title="Move up"
              ?disabled=${idx === 0}
              @click=${(e: Event) => { e.stopPropagation(); this._moveTile(idx, -1); }}>↑</button>
            <button class="icon-btn" title="Move down"
              ?disabled=${idx === total - 1}
              @click=${(e: Event) => { e.stopPropagation(); this._moveTile(idx, 1); }}>↓</button>
            <button class="icon-btn danger" title="Delete"
              @click=${(e: Event) => { e.stopPropagation(); this._deleteTile(idx); }}>✕</button>
          </span>
        </div>
        ${expanded ? this._renderTileEditor(tile, idx) : nothing}
      </div>
    `;
  }

  private _renderTileEditor(tile: TileConfig, idx: number): TemplateResult {
    const ft = this._filterTab[idx] ?? "on";
    const filterVal = ft === "on"
      ? (typeof tile.filter_on === "object" ? tile.filter_on : (tile.filter_on ? cssToFilter(tile.filter_on as string) : undefined))
      : (typeof tile.filter_off === "object" ? tile.filter_off : (tile.filter_off ? cssToFilter(tile.filter_off as string) : undefined));

    return html`
      <div class="tile-editor">

        <!-- Basic info -->
        <div class="sub-section-title">Basic</div>
        <div class="row two-col">
          <div class="field">
            <label>Name</label>
            <input type="text" .value=${tile.name}
              @input=${(e: Event) => this._patchTile(idx, { name: (e.target as HTMLInputElement).value })} />
          </div>
          <div class="field">
            <label>Entity</label>
            <input type="text" .value=${tile.entity ?? ""}
              placeholder="light.living_room"
              @input=${(e: Event) => this._patchTile(idx, { entity: (e.target as HTMLInputElement).value })} />
          </div>
        </div>

        <!-- Images -->
        <div class="sub-section-title">Images</div>
        <div class="row">
          <div class="field">
            <label>Background image</label>
            <input type="text" .value=${tile.background_image ?? ""}
              placeholder="/local/Dashboards/Rooms/Living.webp"
              @input=${(e: Event) => this._patchTile(idx, { background_image: (e.target as HTMLInputElement).value })} />
          </div>
        </div>
        <div class="row">
          <div class="field">
            <label>Overlay image <span class="hint-inline">(shown when entity is ON)</span></label>
            <input type="text" .value=${tile.overlay_image ?? ""}
              placeholder="/local/Dashboards/Rooms/LivingOn.webp"
              @input=${(e: Event) => this._patchTile(idx, { overlay_image: (e.target as HTMLInputElement).value })} />
          </div>
        </div>

        <!-- Appearance -->
        <div class="sub-section-title">Appearance</div>
        <div class="row two-col">
          <div class="field">
            <label>Min height (px)</label>
            <input type="number" min="40" max="300" .value=${String(tile.min_height ?? DEFAULT_MIN_HEIGHT)}
              @change=${(e: Event) => {
                const v = parseInt((e.target as HTMLInputElement).value);
                this._patchTile(idx, { min_height: isNaN(v) ? DEFAULT_MIN_HEIGHT : v });
              }} />
          </div>
          <div class="field">
            <label>Filter transition (s)</label>
            <input type="number" min="0" max="5" step="0.1" .value=${String(tile.transition ?? DEFAULT_TRANSITION)}
              @change=${(e: Event) => {
                const v = parseFloat((e.target as HTMLInputElement).value);
                this._patchTile(idx, { transition: isNaN(v) ? DEFAULT_TRANSITION : v });
              }} />
          </div>
        </div>
        <div class="row two-col">
          <div class="field">
            <label>Border color ON</label>
            <input type="text" .value=${tile.border_color_on ?? ""}
              placeholder="rgba(255,165,0,0.45)"
              @input=${(e: Event) => this._patchTile(idx, { border_color_on: (e.target as HTMLInputElement).value })} />
          </div>
          <div class="field">
            <label>Border color OFF</label>
            <input type="text" .value=${tile.border_color_off ?? ""}
              placeholder="rgba(255,255,255,0.1)"
              @input=${(e: Event) => this._patchTile(idx, { border_color_off: (e.target as HTMLInputElement).value })} />
          </div>
        </div>

        <!-- Filters -->
        <div class="sub-section-title">CSS Filters</div>
        <div class="row">
          <div class="field">
            <label>Filter preset</label>
            <select
              .value=${tile.filter_preset ?? ""}
              @change=${(e: Event) => {
                const v = (e.target as HTMLSelectElement).value;
                this._patchTile(idx, { filter_preset: v || undefined });
              }}
            >
              <option value="">— None / custom —</option>
              ${Object.entries(FILTER_PRESETS).map(([key, preset]) => html`
                <option value="${key}" ?selected=${tile.filter_preset === key}>${preset.label}</option>
              `)}
            </select>
          </div>
        </div>
        ${!tile.filter_preset ? html`
          <div class="filter-tabs">
            <button class="filter-tab ${ft === "on" ? "active" : ""}"
              @click=${() => { this._filterTab = { ...this._filterTab, [idx]: "on" }; }}>ON state</button>
            <button class="filter-tab ${ft === "off" ? "active" : ""}"
              @click=${() => { this._filterTab = { ...this._filterTab, [idx]: "off" }; }}>OFF state</button>
          </div>
          ${this._renderFilterSliders(idx, ft, filterVal as Record<string,number> | undefined)}
        ` : html`
          <div class="preset-preview">
            <span class="hint">${FILTER_PRESETS[tile.filter_preset]?.description ?? ""}</span>
            <span class="hint">ON: <code>${filterToCSS(FILTER_PRESETS[tile.filter_preset]?.on)}</code></span>
            <span class="hint">OFF: <code>${filterToCSS(FILTER_PRESETS[tile.filter_preset]?.off)}</code></span>
          </div>
        `}

        <!-- Actions -->
        <div class="sub-section-title">Actions</div>
        ${this._renderActionEditor(tile, idx, "tap_action", "Tap")}
        ${this._renderActionEditor(tile, idx, "hold_action", "Hold (700 ms)")}
        ${this._renderActionEditor(tile, idx, "double_tap_action", "Double tap")}

        <!-- Sensors -->
        <div class="sub-section-title">
          Sensors
          <button class="btn-small" @click=${() => this._addSensor(idx)}>+ Add</button>
        </div>
        ${(tile.sensors ?? []).map((s, sIdx) => this._renderSensorRow(s, idx, sIdx))}
      </div>
    `;
  }

  // ── Filter sliders ─────────────────────────────────────────────────────────

  private _renderFilterSliders(
    idx: number,
    ft: "on" | "off",
    vals: Record<string, number> | undefined
  ): TemplateResult {
    const key = ft === "on" ? "filter_on" : "filter_off";
    const current = (vals ?? {}) as Record<string, number>;

    return html`
      <div class="filter-sliders">
        ${(Object.entries(FILTER_SLIDER_RANGES) as [string, { min: number; max: number; step: number; label: string }][]).map(
          ([name, range]) => {
            const defaults: Record<string, number> = {
              brightness: 1, sepia: 0, saturate: 1, hue_rotate: 0, contrast: 1, blur: 0,
            };
            const val = (current as Record<string, number>)[name] ?? defaults[name] ?? 0;
            return html`
              <div class="slider-row">
                <span class="slider-label">${range.label}</span>
                <input
                  type="range"
                  min="${range.min}" max="${range.max}" step="${range.step}"
                  .value=${String(val)}
                  @input=${(e: Event) => {
                    const newVal = parseFloat((e.target as HTMLInputElement).value);
                    const existing = typeof this._stored!.tiles[idx][key as "filter_on"] === "object"
                      ? (this._stored!.tiles[idx][key as "filter_on"] as Record<string, number>)
                      : { brightness: 1, sepia: 0, saturate: 1, hue_rotate: 0, contrast: 1, blur: 0 };
                    this._patchTile(idx, { [key]: { ...existing, [name]: newVal } });
                  }}
                />
                <span class="slider-value">${val.toFixed(name === "hue_rotate" ? 0 : 2)}</span>
              </div>
            `;
          }
        )}
      </div>
    `;
  }

  // ── Action editor ──────────────────────────────────────────────────────────

  private _renderActionEditor(
    tile: TileConfig,
    idx: number,
    key: "tap_action" | "hold_action" | "double_tap_action",
    label: string
  ): TemplateResult {
    const action = tile[key] ?? emptyAction("none");
    const actionTypes: ActionType[] = ["none", "navigate", "more-info", "call-service", "popup"];

    return html`
      <div class="action-row">
        <span class="action-label">${label}</span>
        <select
          .value=${action.action}
          @change=${(e: Event) => {
            const type = (e.target as HTMLSelectElement).value as ActionType;
            this._patchTile(idx, { [key]: emptyAction(type) });
          }}
        >
          ${actionTypes.map(t => html`
            <option value="${t}" ?selected=${action.action === t}>${t}</option>
          `)}
        </select>
        ${action.action === "navigate" ? html`
          <input
            type="text" class="action-extra"
            placeholder="/dashboard/room"
            .value=${action.navigation_path ?? ""}
            @input=${(e: Event) => this._patchAction(idx, key, { navigation_path: (e.target as HTMLInputElement).value })}
          />
        ` : nothing}
        ${action.action === "more-info" ? html`
          <input
            type="text" class="action-extra"
            placeholder="entity (leave blank to use tile entity)"
            .value=${action.entity ?? ""}
            @input=${(e: Event) => this._patchAction(idx, key, { entity: (e.target as HTMLInputElement).value })}
          />
        ` : nothing}
        ${action.action === "call-service" ? html`
          <input
            type="text" class="action-extra"
            placeholder="domain.service"
            .value=${action.service ?? ""}
            @input=${(e: Event) => this._patchAction(idx, key, { service: (e.target as HTMLInputElement).value })}
          />
        ` : nothing}
        ${action.action === "popup" ? html`
          <input
            type="text" class="action-extra"
            placeholder="Popup title"
            .value=${action.popup?.title ?? ""}
            @input=${(e: Event) => this._patchAction(idx, key, {
              popup: { ...action.popup, title: (e.target as HTMLInputElement).value }
            })}
          />
        ` : nothing}
      </div>
    `;
  }

  // ── Sensor row ─────────────────────────────────────────────────────────────

  private _renderSensorRow(
    s: SensorOverlayConfig,
    tileIdx: number,
    sIdx: number
  ): TemplateResult {
    return html`
      <div class="sensor-row">
        <input
          type="text" class="sensor-entity"
          placeholder="sensor.temperature"
          .value=${s.entity}
          @input=${(e: Event) => this._patchSensor(tileIdx, sIdx, { entity: (e.target as HTMLInputElement).value })}
        />
        <select
          .value=${s.position}
          @change=${(e: Event) => this._patchSensor(tileIdx, sIdx, {
            position: (e.target as HTMLSelectElement).value as SensorOverlayConfig["position"]
          })}
        >
          ${(["top-left","top-right","bottom-left","bottom-right"] as const).map(p => html`
            <option value="${p}" ?selected=${s.position === p}>${p}</option>
          `)}
        </select>
        <input
          type="text" class="sensor-unit"
          placeholder="unit"
          .value=${s.unit ?? ""}
          @input=${(e: Event) => this._patchSensor(tileIdx, sIdx, { unit: (e.target as HTMLInputElement).value || undefined })}
        />
        <button class="icon-btn danger"
          @click=${() => this._deleteSensor(tileIdx, sIdx)}>✕</button>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // Styles
  // -------------------------------------------------------------------------

  static get styles() {
    return css`
      :host { display: block; }

      .loading, .error {
        padding: 16px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .error { color: var(--error-color, #ef4444); }

      .editor {
        padding: 0;
        position: relative;
      }

      /* Tabs */
      .tabs {
        display: flex;
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.1);
        margin-bottom: 4px;
      }
      .tab {
        flex: 1;
        padding: 10px 8px;
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        transition: color 0.15s, border-color 0.15s;
      }
      .tab.active {
        color: var(--primary-color, #3b82f6);
        border-bottom-color: var(--primary-color, #3b82f6);
      }

      /* Sections */
      .section {
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .section-title {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin-bottom: 2px;
      }
      .sub-section-title {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 10px 0 4px;
      }

      /* Fields */
      .row {
        display: flex;
        gap: 8px;
      }
      .two-col .field { flex: 1; }

      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
      }
      label {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }
      input[type="text"],
      input[type="number"],
      select {
        width: 100%;
        padding: 6px 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.05);
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        border-radius: 6px;
        color: var(--primary-text-color);
        font-size: 13px;
        box-sizing: border-box;
        outline: none;
        transition: border-color 0.15s;
      }
      input:focus, select:focus {
        border-color: var(--primary-color, #3b82f6);
      }
      select option {
        background: var(--card-background-color, #1c1c1c);
        color: var(--primary-text-color);
      }
      .hint {
        font-size: 10px;
        color: var(--secondary-text-color);
        opacity: 0.7;
        display: block;
        margin-top: 1px;
      }
      .hint-inline {
        font-size: 10px;
        font-weight: 400;
        opacity: 0.7;
      }

      /* Chips */
      .chip-row { display: flex; flex-wrap: wrap; gap: 6px; }
      .chip {
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 12px;
        cursor: pointer;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.15);
        background: none;
        color: var(--primary-text-color);
      }
      .chip-active {
        background: var(--primary-color, #3b82f6);
        border-color: var(--primary-color, #3b82f6);
        color: #fff;
      }

      /* Tile list */
      .tile-row {
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.08);
        border-radius: 8px;
        overflow: hidden;
      }
      .tile-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        cursor: pointer;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.03);
        user-select: none;
      }
      .tile-header:hover {
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.06);
      }
      .tile-arrow { font-size: 10px; opacity: 0.5; }
      .tile-name  { font-size: 13px; font-weight: 600; flex: 1; }
      .tile-entity { font-size: 11px; color: var(--secondary-text-color); flex: 1; opacity: 0.8; }
      .tile-actions-row { display: flex; gap: 4px; }

      .tile-editor {
        padding: 4px 12px 12px;
        border-top: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.06);
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      /* Buttons */
      .icon-btn {
        width: 24px; height: 24px;
        padding: 0;
        background: none;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        border-radius: 4px;
        cursor: pointer;
        color: var(--primary-text-color);
        font-size: 12px;
        display: flex; align-items: center; justify-content: center;
      }
      .icon-btn:hover { background: rgba(var(--rgb-primary-text-color,255,255,255),0.08); }
      .icon-btn:disabled { opacity: 0.3; cursor: default; }
      .icon-btn.danger:hover { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.4); color: #ef4444; }

      .btn-add {
        width: 100%;
        padding: 8px;
        background: none;
        border: 1px dashed rgba(var(--rgb-primary-text-color,255,255,255),0.18);
        border-radius: 8px;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 13px;
        margin-top: 4px;
      }
      .btn-add:hover { background: rgba(var(--rgb-primary-text-color,255,255,255),0.04); }

      .btn-small {
        padding: 2px 8px;
        background: none;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.15);
        border-radius: 4px;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 11px;
      }

      /* Filters */
      .filter-tabs {
        display: flex;
        gap: 4px;
        margin-bottom: 4px;
      }
      .filter-tab {
        padding: 3px 12px;
        border-radius: 4px;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.12);
        background: none;
        cursor: pointer;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .filter-tab.active {
        background: var(--primary-color, #3b82f6);
        border-color: var(--primary-color, #3b82f6);
        color: #fff;
      }

      .filter-sliders {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.03);
        border-radius: 6px;
        border: 1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.06);
      }
      .slider-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .slider-label {
        width: 72px;
        font-size: 11px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }
      .slider-row input[type="range"] {
        flex: 1;
        padding: 0;
        border: none;
        background: none;
        height: 20px;
      }
      .slider-value {
        width: 36px;
        font-size: 11px;
        text-align: right;
        color: var(--primary-text-color);
        flex-shrink: 0;
      }

      .preset-preview {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.03);
        border-radius: 6px;
        font-size: 11px;
      }
      .preset-preview code {
        font-size: 10px;
        opacity: 0.7;
      }

      /* Actions */
      .action-row {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
      }
      .action-label {
        width: 80px;
        font-size: 11px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }
      .action-row select { width: auto; flex-shrink: 0; }
      .action-extra { flex: 1; }

      /* Sensors */
      .sensor-row {
        display: flex;
        gap: 4px;
        align-items: center;
        margin-bottom: 4px;
      }
      .sensor-entity { flex: 2; }
      .sensor-unit { width: 56px; flex-shrink: 0; }

      /* Saving badge */
      .saving-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 10px;
        padding: 2px 8px;
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.1);
        border-radius: 4px;
        color: var(--secondary-text-color);
        letter-spacing: 0.3px;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "navbar-card-editor": NavbarCardEditor;
  }
}
