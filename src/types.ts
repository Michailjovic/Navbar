// ─────────────────────────────────────────────────────────────────────────────
// Home Assistant core types (minimal surface needed by the card)
// ─────────────────────────────────────────────────────────────────────────────

export interface HomeAssistant {
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>
  ): Promise<void>;
  states: Record<string, HassEntity>;
  language: string;
  themes: Record<string, unknown>;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_updated: string;
  last_changed: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// CSS Filter values – used by the slider-based GUI editor
// ─────────────────────────────────────────────────────────────────────────────

export interface FilterValues {
  brightness?: number;  // 0–3,   default 1
  sepia?: number;       // 0–1,   default 0
  saturate?: number;    // 0–3,   default 1
  hue_rotate?: number;  // 0–360, default 0  (degrees)
  contrast?: number;    // 0–2,   default 1
  blur?: number;        // 0–20,  default 0  (px)
}

// ─────────────────────────────────────────────────────────────────────────────
// Card config (what lives in Lovelace YAML per card instance)
// ─────────────────────────────────────────────────────────────────────────────

export interface NavbarCardConfig {
  type: string;
  /** References a named config stored server-side. Defaults to "default". */
  config_id?: string;
  /**
   * Inline fallback config – used when the backend integration is not
   * available, or when config_id is omitted and tiles are provided directly.
   */
  tiles?: TileConfig[];
  slots?: SlotsConfig;
}

// ─────────────────────────────────────────────────────────────────────────────
// Stored config (what lives in HA .storage, keyed by config_id)
// ─────────────────────────────────────────────────────────────────────────────

export interface StoredNavbarConfig {
  version?: number;
  tiles: TileConfig[];
  slots?: SlotsConfig;
  layout?: NavbarLayout;
}

// ─────────────────────────────────────────────────────────────────────────────
// Tile
// ─────────────────────────────────────────────────────────────────────────────

export interface TileConfig {
  /** Display name (used in editor, tooltips). */
  name: string;

  // ── Entity ────────────────────────────────────────────────────────────────
  /** Primary entity – drives border colour and CSS filter state. */
  entity?: string;

  // ── Images ────────────────────────────────────────────────────────────────
  /** Background image. Accepts /local/... paths or full URLs. */
  background_image?: string;
  /**
   * Optional second image layer rendered on top of the background.
   * Fades in (opacity 0→1) when entity state is 'on'.
   */
  overlay_image?: string;

  // ── Filters ───────────────────────────────────────────────────────────────
  /**
   * Name of a built-in or user-saved preset.
   * When set, filter_on / filter_off are ignored unless explicitly overriding.
   */
  filter_preset?: string;
  /**
   * CSS filter applied when entity state is 'on'.
   * Accepts FilterValues (GUI) or a plain CSS string (YAML power users).
   */
  filter_on?: FilterValues | string;
  /**
   * CSS filter applied when entity state is 'off' or unavailable.
   * Accepts FilterValues (GUI) or a plain CSS string (YAML power users).
   */
  filter_off?: FilterValues | string;

  // ── Border ────────────────────────────────────────────────────────────────
  /** Border colour when entity is 'on'. Default: rgba(255,165,0,0.45) */
  border_color_on?: string;
  /** Border colour when entity is 'off'. Default: rgba(255,255,255,0.1) */
  border_color_off?: string;

  // ── Layout ────────────────────────────────────────────────────────────────
  /** Minimum tile height in px. Default: 83 */
  min_height?: number;
  /** CSS filter transition duration in seconds. Default: 1.5 */
  transition?: number;

  // ── Actions ───────────────────────────────────────────────────────────────
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;

  // ── Sensor overlays ───────────────────────────────────────────────────────
  sensors?: SensorOverlayConfig[];
}

export type SensorPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface SensorOverlayConfig {
  entity: string;
  position: SensorPosition;
  /** Unit suffix. If omitted, auto-detected from device_class. */
  unit?: string;
  /** Font size in px. Default: 11 */
  font_size?: number;
  /**
   * Colour thresholds. If omitted, auto-generated from entity device_class.
   * Set to [] to disable colouring entirely.
   */
  thresholds?: ThresholdConfig[];
  /** Decimal places for numeric values. Default: 1. Set 0 for integer. */
  precision?: number;
  /** When to show this sensor. Default: always */
  show_when?: "always" | "on" | "off";
}

export interface ThresholdConfig {
  above: number;
  color: string;
}

export type ActionType = "navigate" | "more-info" | "call-service" | "popup" | "none";

export interface ActionConfig {
  action: ActionType;
  navigation_path?: string;
  entity?: string;
  service?: string;
  service_data?: Record<string, unknown>;
  popup?: PopupConfig;
}

export interface PopupConfig {
  title?: string;
  size?: "small" | "normal" | "wide" | "fullscreen";
  content?: Record<string, unknown>[];
}

export interface SlotsConfig {
  bottom?: SlotItemConfig[];
}

export interface SlotItemConfig {
  type: string;
  [key: string]: unknown;
}

export interface WsListConfigsResult {
  configs: string[];
}

// Layout config for the card itself
export interface NavbarLayout {
  /** Number of tile columns. Default: auto (all in one row). */
  columns?: number;
  /** Gap between tiles in px. Default: 6 */
  gap?: number;
}
