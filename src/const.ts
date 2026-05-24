export const CARD_VERSION = "0.0.10";
export const CARD_TAG = "navbar-card";
export const DEFAULT_CONFIG_ID = "default";

export const WS_GET_CONFIG    = "navbar/get_config";
export const WS_SAVE_CONFIG   = "navbar/save_config";
export const WS_LIST_CONFIGS  = "navbar/list_configs";
export const WS_DELETE_CONFIG = "navbar/delete_config";

export const DEFAULT_MIN_HEIGHT    = 83;
export const DEFAULT_TRANSITION    = 1.5;
export const DEFAULT_FONT_SIZE     = 11;
export const DEFAULT_BORDER_RADIUS = "12px";

export const BORDER_COLOR_ON  = "rgba(255,165,0,0.45)";
export const BORDER_COLOR_OFF = "rgba(255,255,255,0.1)";

export const COLOR_HOT  = "#ff4d4f";
export const COLOR_WARN = "#faad14";
export const COLOR_OK   = "#52c41a";
export const COLOR_COLD = "#40a9ff";

export const SENSOR_POSITIONS: Record<string, Record<string, string>> = {
  "top-left":     { top: "5px",    left:  "6px",  bottom: "auto", right: "auto" },
  "top-right":    { top: "5px",    right: "6px",  bottom: "auto", left:  "auto" },
  "bottom-left":  { bottom: "5px", left:  "6px",  top:    "auto", right: "auto" },
  "bottom-right": { bottom: "5px", right: "6px",  top:    "auto", left:  "auto" },
};

export const HOLD_THRESHOLD_MS = 700;
export const DOUBLE_TAP_MS     = 300;
