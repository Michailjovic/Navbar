/**
 * Auto color thresholds by HA device_class.
 * Applied when a sensor overlay has no explicit thresholds configured.
 * Covers the most common sensor types used in room navigation cards.
 */

import type { ThresholdConfig } from "./types";

/** Returns auto thresholds for a given device_class, or undefined if unknown. */
export function getAutoThresholds(deviceClass: string | undefined): ThresholdConfig[] | undefined {
  if (!deviceClass) return undefined;
  return AUTO_THRESHOLDS[deviceClass.toLowerCase()];
}

/** Returns default unit suffix for a device_class (fallback when unit not configured). */
export function getAutoUnit(deviceClass: string | undefined): string {
  if (!deviceClass) return "";
  return AUTO_UNITS[deviceClass.toLowerCase()] ?? "";
}

/**
 * Auto thresholds per device_class.
 * Thresholds are checked highest-first: first match >= value wins.
 * Colors: red=danger, orange=warning, green=ok, blue=cold/low.
 */
const AUTO_THRESHOLDS: Record<string, ThresholdConfig[]> = {

  // Temperature (Celsius)
  temperature: [
    { above: 27,  color: "#ff4d4f" },  // too hot
    { above: 23,  color: "#faad14" },  // warm
    { above: 17,  color: "#52c41a" },  // comfortable
    { above: 0,   color: "#40a9ff" },  // cold
    { above: -99, color: "#1890ff" },  // very cold
  ],

  // Relative humidity (%)
  humidity: [
    { above: 70,  color: "#ff4d4f" },  // dangerously high
    { above: 60,  color: "#faad14" },  // high
    { above: 40,  color: "#52c41a" },  // comfortable
    { above: 30,  color: "#faad14" },  // low
    { above: 0,   color: "#40a9ff" },  // very dry
  ],

  // CO2 (ppm)
  carbon_dioxide: [
    { above: 2000, color: "#ff4d4f" },  // dangerous
    { above: 1000, color: "#faad14" },  // poor
    { above: 700,  color: "#52c41a" },  // acceptable
    { above: 0,    color: "#52c41a" },  // good
  ],

  // PM2.5 (ug/m3)
  pm25: [
    { above: 55,  color: "#ff4d4f" },
    { above: 35,  color: "#faad14" },
    { above: 12,  color: "#52c41a" },
    { above: 0,   color: "#52c41a" },
  ],

  // PM10 (ug/m3)
  pm10: [
    { above: 255, color: "#ff4d4f" },
    { above: 155, color: "#faad14" },
    { above: 55,  color: "#52c41a" },
    { above: 0,   color: "#52c41a" },
  ],

  // VOC (index or ug/m3 - use index 0-500)
  volatile_organic_compounds: [
    { above: 300, color: "#ff4d4f" },
    { above: 150, color: "#faad14" },
    { above: 0,   color: "#52c41a" },
  ],

  // Battery (%)
  battery: [
    { above: 60,  color: "#52c41a" },
    { above: 30,  color: "#faad14" },
    { above: 0,   color: "#ff4d4f" },
  ],

  // Illuminance (lux)
  illuminance: [
    { above: 1000, color: "#faad14" },
    { above: 200,  color: "#52c41a" },
    { above: 0,    color: "#40a9ff" },
  ],

  // Power (W)
  power: [
    { above: 2000, color: "#ff4d4f" },
    { above: 500,  color: "#faad14" },
    { above: 0,    color: "#52c41a" },
  ],
};

const AUTO_UNITS: Record<string, string> = {
  temperature:                 "°",     // °
  humidity:                    "%",
  carbon_dioxide:              " ppm",
  pm25:                        " μg",   // μg
  pm10:                        " μg",
  volatile_organic_compounds:  "",
  battery:                     "%",
  illuminance:                 " lx",
  power:                       " W",
};
