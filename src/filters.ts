/**
 * Filter system for Navbar Card.
 *
 * FilterValues  – structured representation of CSS filter parameters.
 *                 Used for slider-based GUI editing and preset storage.
 * filterToCSS   – converts FilterValues (or a plain CSS string) to a CSS filter string.
 * cssToFilter   – parses a CSS filter string back into FilterValues (for the editor).
 * FILTER_PRESETS – built-in named presets; also serves as the community starting-point.
 */

import type { FilterValues } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Conversion utilities
// ─────────────────────────────────────────────────────────────────────────────

/** Convert a FilterValues object (or a plain CSS string) to a CSS filter value. */
export function filterToCSS(filter: FilterValues | string | undefined): string {
  if (!filter) return "none";
  if (typeof filter === "string") return filter.trim() || "none";

  const parts: string[] = [];
  if (filter.brightness !== undefined && filter.brightness !== 1)
    parts.push(`brightness(${+filter.brightness.toFixed(3)})`);
  if (filter.sepia !== undefined && filter.sepia !== 0)
    parts.push(`sepia(${+filter.sepia.toFixed(3)})`);
  if (filter.saturate !== undefined && filter.saturate !== 1)
    parts.push(`saturate(${+filter.saturate.toFixed(3)})`);
  if (filter.hue_rotate !== undefined && filter.hue_rotate !== 0)
    parts.push(`hue-rotate(${Math.round(filter.hue_rotate)}deg)`);
  if (filter.contrast !== undefined && filter.contrast !== 1)
    parts.push(`contrast(${+filter.contrast.toFixed(3)})`);
  if (filter.blur !== undefined && filter.blur > 0)
    parts.push(`blur(${+filter.blur.toFixed(1)}px)`);

  return parts.join(" ") || "none";
}

/** Parse a CSS filter string back into a FilterValues object (for loading into sliders). */
export function cssToFilter(css: string): FilterValues {
  const num = (name: string, unit = "") => {
    const re = new RegExp(`${name}\\(([\\d.]+)${unit}\\)`);
    const m = css.match(re);
    return m ? parseFloat(m[1]) : undefined;
  };
  return {
    brightness: num("brightness") ?? 1,
    sepia: num("sepia") ?? 0,
    saturate: num("saturate") ?? 1,
    hue_rotate: num("hue-rotate", "deg") ?? 0,
    contrast: num("contrast") ?? 1,
    blur: num("blur", "px") ?? 0,
  };
}

/** Produce a human-readable CSS filter string (for the "copy to clipboard" feature). */
export function filterToReadableCSS(filter: FilterValues | string | undefined): string {
  return filterToCSS(filter);
}

// ─────────────────────────────────────────────────────────────────────────────
// Preset library
// ─────────────────────────────────────────────────────────────────────────────

export interface FilterPreset {
  /** Display name shown in GUI dropdown. */
  label: string;
  /** Short description for tooltip. */
  description: string;
  /** Filter values when tracked entity is 'on'. */
  on: FilterValues;
  /** Filter values when tracked entity is 'off' / unavailable. */
  off: FilterValues;
}

/**
 * Built-in filter presets.
 * Keys are stored in tile config as `filter_preset: "warm-bedroom"`.
 * Custom user presets are stored in backend storage under the same shape.
 */
export const FILTER_PRESETS: Record<string, FilterPreset> = {
  // ── Warm tones ────────────────────────────────────────────────────────────

  "warm-bedroom": {
    label: "Warm Bedroom",
    description: "Warm orange incandescent light, darker when off.",
    on:  { brightness: 2.6, sepia: 0.35, saturate: 0.9,  hue_rotate: 0,   contrast: 1, blur: 0 },
    off: { brightness: 0.6, sepia: 0,    saturate: 1.0,  hue_rotate: 0,   contrast: 1, blur: 0 },
  },

  "warm-living": {
    label: "Warm Living Room",
    description: "Warm ambient light with slight orange overlay.",
    on:  { brightness: 2.0, sepia: 0.3,  saturate: 1.0,  hue_rotate: 0,   contrast: 1, blur: 0 },
    off: { brightness: 0.5, sepia: 0,    saturate: 0.85, hue_rotate: 0,   contrast: 1, blur: 0 },
  },

  // ── Teal / aqua (LED strips, kitchen, hall) ───────────────────────────────

  "teal-kitchen": {
    label: "Teal Kitchen",
    description: "Cool teal LED tone, typical for under-cabinet lighting.",
    on:  { brightness: 1.6, sepia: 0.47, saturate: 3.0,  hue_rotate: 175, contrast: 1, blur: 0 },
    off: { brightness: 0.5, sepia: 0.3,  saturate: 1.8,  hue_rotate: -10, contrast: 1, blur: 0 },
  },

  "teal-hall": {
    label: "Teal Hall",
    description: "Cool teal panel light.",
    on:  { brightness: 1.7, sepia: 0.57, saturate: 2.5,  hue_rotate: 175, contrast: 1, blur: 0 },
    off: { brightness: 0.6, sepia: 0,    saturate: 0.9,  hue_rotate: 0,   contrast: 1, blur: 0 },
  },

  // ── White / neutral ───────────────────────────────────────────────────────

  "white-bathroom": {
    label: "White Bathroom",
    description: "Bright white/blue bathroom light.",
    on:  { brightness: 2.0, sepia: 0.35, saturate: 1.5,  hue_rotate: 185, contrast: 1, blur: 0 },
    off: { brightness: 0.75, sepia: 0.1, saturate: 0.9,  hue_rotate: 0,   contrast: 1, blur: 0 },
  },

  "natural-day": {
    label: "Natural Day",
    description: "Neutral daylight through blinds.",
    on:  { brightness: 1.7, sepia: 0.12, saturate: 1.05, hue_rotate: 0,   contrast: 1, blur: 0 },
    off: { brightness: 0.6, sepia: 0,    saturate: 1.0,  hue_rotate: 0,   contrast: 1, blur: 0 },
  },

  // ── Dark / night ──────────────────────────────────────────────────────────

  "dim": {
    label: "Dim",
    description: "Subtle dimming effect, light slightly brightens when on.",
    on:  { brightness: 1.4, sepia: 0,    saturate: 1.0,  hue_rotate: 0,   contrast: 1, blur: 0 },
    off: { brightness: 0.5, sepia: 0,    saturate: 0.8,  hue_rotate: 0,   contrast: 1, blur: 0 },
  },

  "night": {
    label: "Night",
    description: "Strong darkening at night, soft glow when on.",
    on:  { brightness: 1.2, sepia: 0.2,  saturate: 0.8,  hue_rotate: 0,   contrast: 1, blur: 0 },
    off: { brightness: 0.3, sepia: 0.1,  saturate: 0.6,  hue_rotate: 0,   contrast: 1, blur: 0 },
  },
};

/** Default filter values (neutral – no effect). */
export const DEFAULT_FILTER: FilterValues = {
  brightness: 1,
  sepia: 0,
  saturate: 1,
  hue_rotate: 0,
  contrast: 1,
  blur: 0,
};

/** Slider range definitions for the GUI editor. */
export const FILTER_SLIDER_RANGES = {
  brightness: { min: 0, max: 3,   step: 0.05, label: "Brightness" },
  sepia:      { min: 0, max: 1,   step: 0.05, label: "Sepia"      },
  saturate:   { min: 0, max: 3,   step: 0.05, label: "Saturate"   },
  hue_rotate: { min: 0, max: 360, step: 1,    label: "Hue rotate" },
  contrast:   { min: 0, max: 2,   step: 0.05, label: "Contrast"   },
  blur:       { min: 0, max: 20,  step: 0.5,  label: "Blur"       },
} as const;
