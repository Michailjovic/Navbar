# Navbar Card - Canceled. Prefer to use embeded view card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![Release](https://img.shields.io/github/v/release/Michailjovic/Navbar)](https://github.com/Michailjovic/Navbar/releases)

A configurable room navigation card for Home Assistant with sensor overlays, light-state visualisation, and multi-dashboard support via a single stored configuration.

---

## Features

- **Room tiles** with background images and live CSS filter effects based on light state
- **Sensor overlays** (temperature, humidity, CO₂…) with configurable colour thresholds
- **Actions** – tap, hold, double-tap with navigation, more-info, call-service, or popup
- **Popup support** – browser_mod (preferred) with HA dialog fallback
- **Single point of truth** – one config stored server-side, shared across all dashboards
- **Multiple named configs** – different layouts per device/dashboard via `config_id`
- **Visual card editor** – full GUI configuration, no YAML required
- **Standalone mode** – works without the backend integration using inline YAML config

---

## Installation via HACS

> **This repository contains both a backend integration and a frontend card.**
> You need to add it to HACS **twice** – once as an Integration, once as a Lovelace plugin.

### Step 1 – Backend integration

1. HACS → Integrations → ⋮ → Custom repositories
2. URL: `https://github.com/Michailjovic/Navbar` — Category: **Integration**
3. Install *Navbar Card* → Restart Home Assistant
4. Settings → Integrations → **Add integration** → search **Navbar Card** → Submit

### Step 2 – Frontend card

1. HACS → Frontend → ⋮ → Custom repositories
2. URL: `https://github.com/Michailjovic/Navbar` — Category: **Lovelace**
3. Install *Navbar Card* → Clear browser cache (Ctrl+Shift+R)

HACS will automatically register `/hacsfiles/Navbar/navbar-card.js` as a Lovelace resource.

---

## Usage

### Minimal (uses backend-stored config)
```yaml
type: custom:navbar-card
config_id: default
```

### Full example with all features
```yaml
type: custom:navbar-card
tiles:
  - name: Bedroom
    entity: light.light_group_bedroom
    background_image: /local/Dashboards/Rooms/Bedroom.webp
    filter_preset: warm-bedroom
    tap_action:
      action: navigate
      navigation_path: /dashboard-home/bedroom
    hold_action:
      action: more-info
    sensors:
      - entity: sensor.bedroom_temperature
        position: top-right
      - entity: sensor.bedroom_humidity
        position: bottom-right

  - name: Living Room
    entity: light.light_group_living
    background_image: /local/Dashboards/Rooms/Living.webp
    filter_preset: warm-living
    tap_action:
      action: navigate
      navigation_path: /dashboard-home/living
```

### Multiple configs across dashboards
```yaml
# Main dashboard
type: custom:navbar-card
config_id: main

# Tablet dashboard
type: custom:navbar-card
config_id: tablet
```

---

## Config reference

### Card options

| Option | Type | Description |
|---|---|---|
| `config_id` | string | ID of stored config. Default: `default` |
| `tiles` | list | Inline tile config (standalone mode, no backend needed) |

### Tile options

| Option | Type | Description |
|---|---|---|
| `name` | string | Display name |
| `entity` | string | Controls border colour and CSS filter state |
| `background_image` | string | Path to background image (`/local/...`) |
| `overlay_image` | string | Second image layer shown when entity is `on` |
| `filter_preset` | string | Built-in preset name (see below) |
| `filter_on` | string / object | CSS filter when entity is `on` |
| `filter_off` | string / object | CSS filter when entity is `off` |
| `border_color_on` | string | Border colour when `on`. Default: `rgba(255,165,0,0.45)` |
| `border_color_off` | string | Border colour when `off`. Default: `rgba(255,255,255,0.1)` |
| `min_height` | number | Tile height in px. Default: `83` |
| `transition` | number | Fade duration in seconds. Default: `1.5` |
| `tap_action` | action | Action on single tap |
| `hold_action` | action | Action on long press (700 ms) |
| `double_tap_action` | action | Action on double tap |
| `sensors` | list | Sensor overlays |

### Built-in filter presets

| Key | Description |
|---|---|
| `warm-bedroom` | Warm orange incandescent light |
| `warm-living` | Warm ambient with slight orange overlay |
| `teal-kitchen` | Cool teal LED, typical for under-cabinet lighting |
| `teal-hall` | Cool teal panel light |
| `white-bathroom` | Bright white/blue bathroom light |
| `natural-day` | Neutral daylight through blinds |
| `dim` | Subtle dimming effect |
| `night` | Strong darkening at night, soft glow when on |

### Sensor overlay options

| Option | Type | Description |
|---|---|---|
| `entity` | string | Sensor entity ID |
| `position` | string | `top-left` / `top-right` / `bottom-left` / `bottom-right` |
| `unit` | string | Unit suffix. Auto-detected from `device_class` if omitted |
| `font_size` | number | Font size in px. Default: `11` |
| `precision` | number | Decimal places. Default: `1` |
| `show_when` | string | `always` / `on` / `off`. Default: `always` |
| `thresholds` | list | Colour thresholds: `above: <value>` + `color: <hex>` |

### Action options

| Option | Type | Description |
|---|---|---|
| `action` | string | `navigate` / `more-info` / `call-service` / `popup` / `none` |
| `navigation_path` | string | Path for `navigate` action |
| `entity` | string | Entity for `more-info` (defaults to tile entity) |
| `service` | string | Service for `call-service` (e.g. `light.toggle`) |
| `service_data` | object | Data for `call-service` |
| `popup` | object | Config for `popup` action |

---

## Development

```bash
npm install
npm run build    # production build → dist/navbar-card.js
npm run dev      # watch mode
npm run lint     # TypeScript type check
```

---

## Roadmap

| Version | Milestone |
|---|---|
| v0.0.1 | Project skeleton, backend WS API |
| v0.0.2 | Room tile visuals – background image, CSS filters, border |
| v0.0.3 | Sensor overlays with colour thresholds and auto device_class detection |
| v0.0.4 | Actions – tap / hold / double-tap, popup engine, config flow GUI |
| v0.0.5 | Visual card editor (full GUI configuration) |
| v0.0.6 | HACS frontend plugin fix, README update |
| v0.0.7 | Workflow fix – release assets, correct tag pattern |
| v1.0.0 | HACS default repository submission |

---

## License

MIT © Michailjovic
