import {
  LitElement,
  html,
  css,
  nothing,
  type PropertyValues,
  type TemplateResult,
} from "lit";
import { customElement, property, state } from "lit/decorators.js";

import type {
  HomeAssistant,
  NavbarCardConfig,
  StoredNavbarConfig,
  TileConfig,
  SensorOverlayConfig,
  ActionConfig,
  NavbarLayout,
} from "./types";
import {
  CARD_VERSION,
  CARD_TAG,
  DEFAULT_CONFIG_ID,
  DEFAULT_MIN_HEIGHT,
  DEFAULT_TRANSITION,
  DEFAULT_FONT_SIZE,
  DEFAULT_BORDER_RADIUS,
  BORDER_COLOR_ON,
  BORDER_COLOR_OFF,
  SENSOR_POSITIONS,
  HOLD_THRESHOLD_MS,
  DOUBLE_TAP_MS,
  WS_GET_CONFIG,
} from "./const";
import { filterToCSS, FILTER_PRESETS } from "./filters";
import { getAutoThresholds, getAutoUnit } from "./sensor-defaults";
import { openPopup } from "./popup";
import "./navbar-editor";

// Console badge 
console.info(
  `%c NAVBAR-CARD %c v${CARD_VERSION} `,
  "color:#fff;background:#3b82f6;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px;",
  "color:#3b82f6;background:#1e293b;font-weight:700;padding:2px 6px;border-radius:0 4px 4px 0;"
);

// 
// NavbarCard
// 

@customElement(CARD_TAG)
export class NavbarCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: NavbarCardConfig;

  @state() private _stored: StoredNavbarConfig | null = null;
  @state() private _loading = true;
  @state() private _error: string | null = null;
  @state() private _standalone = false;

  // Hold / double-tap tracking (per tile index)
  private _holdTimers: Map<number, ReturnType<typeof setTimeout>> = new Map();
  private _lastTap: Map<number, number> = new Map();
  private _holdFired: Set<number> = new Set();

  // Slot card elements – created once, hass kept in sync
  private _slotElements: Map<string, HTMLElement & { setConfig?: (c: Record<string,unknown>) => void; hass?: unknown }> = new Map();

  // Lovelace API 

  public setConfig(config: NavbarCardConfig): void {
    if (!config) throw new Error("navbar-card: missing configuration");
    this.config = config;
    this._stored = null;
    this._loading = true;
    this._error = null;
  }

  // Lifecycle 

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has("hass") && this.hass) {
      if (this._loading) void this._loadConfig();
      // Keep hass in sync on all slot card elements
      for (const el of this._slotElements.values()) {
        el.hass = this.hass;
      }
    }
  }

  // Data loading 

  private async _loadConfig(): Promise<void> {
    // Standalone mode  no config_id, inline tiles provided
    if (!this.config.config_id && this.config.tiles?.length) {
      this._stored = { tiles: this.config.tiles, slots: this.config.slots };
      this._standalone = true;
      this._loading = false;
      return;
    }

    const configId = this.config.config_id ?? DEFAULT_CONFIG_ID;

    try {
      const result = await this.hass.callWS<StoredNavbarConfig>({
        type: WS_GET_CONFIG,
        config_id: configId,
      });
      this._stored = result;
      this._loading = false;
    } catch (err: unknown) {
      const haErr = err as Record<string, unknown>;
      const msg = err instanceof Error
        ? err.message
        : (haErr?.message ? String(haErr.message) : (haErr?.code ? String(haErr.code) : String(err)));

      if (this.config.tiles?.length) {
        // Graceful fallback to inline config
        this._stored = { tiles: this.config.tiles, slots: this.config.slots };
        this._standalone = true;
        this._loading = false;
        console.warn(
          `[navbar-card] Backend unavailable (${msg}). Running in standalone mode.`
        );
      } else if (msg.includes("not_found")) {
        // Backend OK but config not yet created
        this._stored = { tiles: [] };
        this._loading = false;
      } else {
        this._error = `Backend unavailable (${msg}). Go to Settings → Integrations → Add → "Navbar Card" to enable the backend, or use standalone mode with inline tiles: in the card config.`;
        this._loading = false;
      }
    }
  }

  // Action handling 

  private _handlePointerDown(idx: number, tile: TileConfig, e: PointerEvent): void {
    if (e.button !== 0) return; // left click only
    this._holdFired.delete(idx);

    if (tile.hold_action && tile.hold_action.action !== "none") {
      const timer = setTimeout(() => {
        this._holdFired.add(idx);
        this._executeAction(tile.hold_action!, tile);
      }, HOLD_THRESHOLD_MS);
      this._holdTimers.set(idx, timer);
    }
  }

  private _handlePointerUp(idx: number): void {
    const timer = this._holdTimers.get(idx);
    if (timer !== undefined) {
      clearTimeout(timer);
      this._holdTimers.delete(idx);
    }
  }

  private _handleClick(idx: number, tile: TileConfig): void {
    // Ignore if hold was already fired
    if (this._holdFired.has(idx)) {
      this._holdFired.delete(idx);
      return;
    }

    const now = Date.now();
    const last = this._lastTap.get(idx) ?? 0;

    if (now - last < DOUBLE_TAP_MS && tile.double_tap_action) {
      // Double tap
      this._lastTap.delete(idx);
      this._executeAction(tile.double_tap_action, tile);
    } else {
      // Single tap  delay slightly to allow double-tap detection
      this._lastTap.set(idx, now);
      if (tile.double_tap_action) {
        setTimeout(() => {
          if (this._lastTap.get(idx) === now) {
            this._lastTap.delete(idx);
            this._executeAction(tile.tap_action, tile);
          }
        }, DOUBLE_TAP_MS + 50);
      } else {
        this._lastTap.delete(idx);
        this._executeAction(tile.tap_action, tile);
      }
    }
  }

  private _executeAction(
    action: ActionConfig | undefined,
    tile: TileConfig
  ): void {
    if (!action || action.action === "none") return;

    switch (action.action) {
      case "navigate":
        if (action.navigation_path) {
          window.history.pushState(null, "", action.navigation_path);
          window.dispatchEvent(new Event("location-changed"));
        }
        break;

      case "more-info": {
        const entityId = action.entity ?? tile.entity;
        if (entityId) {
          this.dispatchEvent(
            new CustomEvent("hass-more-info", {
              detail: { entityId },
              bubbles: true,
              composed: true,
            })
          );
        }
        break;
      }

      case "call-service":
        if (action.service) {
          const [domain, service] = action.service.split(".");
          void this.hass.callService(domain, service, action.service_data);
        }
        break;

      case "popup":
        if (action.popup) {
          openPopup(
            this.hass,
            this,
            action.popup.title,
            action.popup.size,
            action.popup.content
          );
        }
        break;
    }
  }

  // Filter resolution 

  private _resolveFilter(tile: TileConfig, isOn: boolean): string {
    // 1. Explicit filter_on / filter_off takes priority
    const explicit = isOn ? tile.filter_on : tile.filter_off;
    if (explicit !== undefined) return filterToCSS(explicit);

    // 2. Named preset
    if (tile.filter_preset) {
      const preset = FILTER_PRESETS[tile.filter_preset];
      if (preset) return filterToCSS(isOn ? preset.on : preset.off);
    }

    // 3. No filter configured
    return "none";
  }

  // Sensor colour helper

  private _sensorColor(sensor: SensorOverlayConfig, value: string): string {
    const num = parseFloat(value);
    if (isNaN(num)) return "rgba(255,255,255,0.55)";

    // Use explicit thresholds if provided; fall back to device_class auto thresholds
    const entityAttrs = this.hass?.states[sensor.entity]?.attributes ?? {};
    const deviceClass = entityAttrs["device_class"] as string | undefined;
    const thresholds = sensor.thresholds?.length
      ? sensor.thresholds
      : getAutoThresholds(deviceClass);

    if (!thresholds?.length) return "rgba(255,255,255,0.85)";

    const sorted = [...thresholds].sort((a, b) => b.above - a.above);
    for (const t of sorted) {
      if (num >= t.above) return t.color;
    }
    return "rgba(255,255,255,0.55)";
  }

  // Render helpers

  private _renderSensor(sensor: SensorOverlayConfig, entityState: string): TemplateResult | typeof nothing {
    // show_when filter
    if (sensor.show_when === "on"  && entityState !== "on")  return nothing;
    if (sensor.show_when === "off" && entityState !== "off") return nothing;

    const hassEntity = this.hass?.states[sensor.entity];
    const rawValue = hassEntity?.state ?? "--";
    const deviceClass = (hassEntity?.attributes?.["device_class"] as string | undefined);

    // Format numeric value
    let display = rawValue;
    if (rawValue !== "--" && rawValue !== "unavailable" && rawValue !== "unknown") {
      const num = parseFloat(rawValue);
      if (!isNaN(num)) {
        const precision = sensor.precision ?? 1;
        display = num.toFixed(precision);
      }
    }

    // Unit: explicit > auto-detected from device_class > empty
    const unit = sensor.unit !== undefined
      ? sensor.unit
      : getAutoUnit(deviceClass);

    const color = this._sensorColor(sensor, rawValue);
    const pos = SENSOR_POSITIONS[sensor.position] ?? SENSOR_POSITIONS["top-left"];
    const fontSize = sensor.font_size ?? DEFAULT_FONT_SIZE;
    const isUnavailable = rawValue === "unavailable" || rawValue === "unknown";

    return html`
      <div style="
        position:absolute;
        top:${pos["top"]};right:${pos["right"]};
        bottom:${pos["bottom"]};left:${pos["left"]};
        z-index:2;
        color:${isUnavailable ? "rgba(255,255,255,0.25)" : color};
        font-size:${fontSize}px;font-weight:700;line-height:1;
        text-shadow:0 1px 3px rgba(0,0,0,0.9);pointer-events:none;
      ">${display}${isUnavailable ? "" : unit}</div>
    `;
  }

  private _renderTile(tile: TileConfig, idx: number): TemplateResult {
    const entityState = tile.entity
      ? (this.hass?.states[tile.entity]?.state ?? "off")
      : "off";
    const isOn = entityState === "on";
    const minHeight = tile.min_height ?? DEFAULT_MIN_HEIGHT;
    const transition = tile.transition ?? DEFAULT_TRANSITION;
    const borderColor = isOn
      ? (tile.border_color_on ?? BORDER_COLOR_ON)
      : (tile.border_color_off ?? BORDER_COLOR_OFF);
    const cssFilter = this._resolveFilter(tile, isOn);
    const overlayOpacity = isOn ? "1" : "0";

    return html`
      <div
        style="
          flex:1;position:relative;overflow:hidden;
          border-radius:${DEFAULT_BORDER_RADIUS};
          min-height:${minHeight}px;
          border:1px solid ${borderColor};
          transition:border-color ${transition}s ease;
          cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none;
        "
        @pointerdown=${(e: PointerEvent) => this._handlePointerDown(idx, tile, e)}
        @pointerup=${() => this._handlePointerUp(idx)}
        @pointercancel=${() => this._handlePointerUp(idx)}
        @click=${() => this._handleClick(idx, tile)}
      >
        ${tile.background_image ? html`
          <div style="
            position:absolute;inset:0;z-index:0;
            background-image:url('${tile.background_image}');
            background-size:cover;background-position:center;
            filter:${cssFilter};
            transition:filter ${transition}s ease;
            pointer-events:none;
          "></div>
        ` : html`
          <div style="
            position:absolute;inset:0;z-index:0;
            background:rgba(var(--rgb-primary-text-color,255,255,255),0.05);
          "></div>
        `}
        ${tile.overlay_image ? html`
          <div style="
            position:absolute;inset:0;z-index:1;
            background-image:url('${tile.overlay_image}');
            background-size:cover;background-position:center;
            opacity:${overlayOpacity};
            transition:opacity ${transition}s ease;
            pointer-events:none;
          "></div>
        ` : nothing}
        ${(tile.sensors ?? []).map((s) => this._renderSensor(s, entityState))}
      </div>
    `;
  }

  // Slot rendering

  private _renderSlots(): TemplateResult | typeof nothing {
    const slots = this._stored?.slots?.bottom;
    if (!slots?.length) return nothing;

    return html`
      <div class="slots-bottom">
        ${slots.map((slotConfig, idx) => {
          const key = `bottom-${idx}-${slotConfig.type}`;
          let el = this._slotElements.get(key);

          if (!el) {
            const tag = (slotConfig.type as string).startsWith("custom:")
              ? (slotConfig.type as string).slice(7)
              : (slotConfig.type as string);

            el = document.createElement(tag) as unknown as typeof el;

            if (typeof el!.setConfig === "function") {
              try {
                // Strip internal editor-only key before passing to card
                const { _name: _ignored, ...cardConfig } = slotConfig as Record<string, unknown>;
                el!.setConfig(cardConfig);
              } catch (e) {
                console.warn("[navbar-card] slot setConfig failed:", e);
              }
            }
            el!.hass = this.hass;
            this._slotElements.set(key, el!);
          }

          return html`<div class="slot-item" .slotEl=${el}>${el}</div>`;
        })}
      </div>
    `;
  }

  // Main render

  protected render(): TemplateResult | typeof nothing {
    if (this._loading) {
      return html`<div class="state-box loading">Loading...</div>`;
    }
    if (this._error) {
      return html`<div class="state-box error">Warning: ${this._error}</div>`;
    }
    if (!this._stored?.tiles?.length) {
      return html`
        <div class="state-box empty">
          Navbar Card v${CARD_VERSION} - No tiles configured yet.
        </div>
      `;
    }
    const layout: NavbarLayout = (this._stored as StoredNavbarConfig & { layout?: NavbarLayout }).layout ?? {};
    const columns = layout.columns ?? 0;
    const gap = layout.gap ?? 6;
    const tilesStyle = columns > 0
      ? `display:grid;grid-template-columns:repeat(${columns},1fr);gap:${gap}px;`
      : `display:flex;gap:${gap}px;align-items:stretch;`;

    return html`
      <div class="navbar">
        <div style="${tilesStyle}">
          ${this._stored.tiles.map((tile, idx) => this._renderTile(tile, idx))}
        </div>
        ${this._standalone ? html`<div class="mode-badge">standalone</div>` : nothing}
        ${this._renderSlots()}
      </div>
    `;
  }

  static get styles() {
    return css`
      :host { display: block; }
      .navbar { display: flex; flex-direction: column; gap: 6px; }
      .tiles-row { display: flex; gap: 6px; align-items: stretch; }
      .tile:active { opacity: 0.88; transform: scale(0.985); }
      .state-box {
        border-radius: 10px; padding: 16px;
        font-size: 12px; text-align: center;
      }
      .loading {
        background: rgba(var(--rgb-primary-text-color,255,255,255),0.04);
        color: var(--secondary-text-color);
        border: 1px dashed rgba(var(--rgb-primary-text-color,255,255,255),0.1);
      }
      .error {
        background: rgba(239,68,68,0.08);
        border: 1px solid rgba(239,68,68,0.3);
        color: #ef4444; text-align: left; line-height: 1.5;
      }
      .empty {
        background: rgba(59,130,246,0.07);
        border: 1px dashed rgba(59,130,246,0.3);
        color: var(--secondary-text-color);
      }
      .mode-badge {
        font-size: 9px; text-align: right; opacity: 0.2;
        color: var(--primary-text-color);
        letter-spacing: 0.5px; text-transform: uppercase;
      }
      .slots-bottom {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 2px;
      }
      .slot-item {
        display: block;
      }
    `;
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement("navbar-card-editor");
  }

  public static getStubConfig(): Partial<NavbarCardConfig> {
    return { config_id: DEFAULT_CONFIG_ID };
  }
}

declare global {
  interface Window { customCards?: Array<Record<string, unknown>>; }
}
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: CARD_TAG,
  name: "Navbar Card",
  description: "Configurable room navigation card with sensor overlays and popup support.",
  preview: true,
  documentationURL: "https://github.com/Michailjovic/Navbar",
});
