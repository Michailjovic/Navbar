# Navbar Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![Release](https://img.shields.io/github/v/release/YOUR_USERNAME/navbar)](https://github.com/YOUR_USERNAME/navbar/releases)

A configurable room navigation card for Home Assistant with sensor overlays, light-state visualisation, and multi-dashboard support via a single stored configuration.

![Preview](docs/preview.png)

---

## Features

- **Room tiles** with background images and live CSS filter effects based on light state
- **Sensor overlays** (temperature, humidity, CO₂…) with configurable colour thresholds
- **Actions** – tap, hold, double-tap with navigation, more-info, or popup support
- **Popup support** – browser_mod (preferred) with HA dialog fallback
- **Single point of truth** – one config stored server-side, referenced by all dashboards
- **Multiple named configs** – different layouts for different devices/dashboards
- **Visual card editor** – full GUI configuration without YAML *(coming in v0.5)*
- **Slots** – attach companion cards (e.g. alert-ticker-card) in a unified layout
- **Standalone mode** – works without the backend integration using inline YAML config

---

## Installation

### 1 – Backend integration (required for multi-dashboard config)

**Via HACS (recommended):**
1. Go to HACS → Integrations → ⋮ → Custom repositories
2. Add `https://github.com/YOUR_USERNAME/navbar` as **Integration**
3. Install *Navbar Card*
4. Restart Home Assistant

**Manual:**
Copy `custom_components/navbar/` to your HA `config/custom_components/` directory and restart.

**Enable the integration** – add to `configuration.yaml`:
```yaml
navbar:
```
Restart Home Assistant once more.

---

### 2 – Frontend card

**Via HACS (recommended):**
1. Go to HACS → Frontend → ⋮ → Custom repositories
2. Add `https://github.com/YOUR_USERNAME/navbar` as **Lovelace plugin**
3. Install *Navbar Card*
4. Clear browser cache

**Manual:**
1. Copy `dist/navbar-card.js` to `config/www/navbar-card.js`
2. In HA → Settings → Dashboards → Resources, add:
   - URL: `/local/navbar-card.js`
   - Type: JavaScript module

---

## Usage

### Minimal (uses backend-stored config)
```yaml
type: custom:navbar-card
config_id: default       # optional – "default" is the fallback
```

### Multiple menus across dashboards
```yaml
# Main dashboard
type: custom:navbar-card
config_id: main

# Tablet dashboard
type: custom:navbar-card
config_id: tablet
```

### Standalone (no backend required)
```yaml
type: custom:navbar-card
tiles:
  - name: Bedroom
    entity: light.light_group_bedroom
    background_image: /local/Dashboards/Rooms/Bedroom.webp
    tap_action:
      action: navigate
      navigation_path: /dashboard-home/bedroom
```

---

## Config reference

### Tile options

| Option | Type | Description |
|---|---|---|
| `name` | string | Display name (shown in editor) |
| `entity` | string | Controls border colour and CSS filter state |
| `background_image` | string | Path to background image |
| `overlay_image` | string | Second image layer shown when entity is `on` |
| `filter_on` | string | CSS filter when entity is `on` |
| `filter_off` | string | CSS filter when entity is `off` |
| `transition` | number | Fade duration in seconds (default: 1.5) |
| `min_height` | number | Tile height in px (default: 83) |
| `tap_action` | action | Action on single tap |
| `hold_action` | action | Action on long press |
| `double_tap_action` | action | Action on double tap |
| `sensors` | list | Sensor overlays (see below) |

### Sensor overlay options

| Option | Type | Description |
|---|---|---|
| `entity` | string | Sensor entity ID |
| `position` | string | `top-left` / `top-right` / `bottom-left` / `bottom-right` |
| `unit` | string | Unit suffix (e.g. `°C`, `%`) |
| `font_size` | number | Font size in px (default: 11) |
| `thresholds` | list | Colour thresholds – `above: <value>` + `color: <hex>` |

### Slots

```yaml
type: custom:navbar-card
config_id: main
slots:
  bottom:
    - type: custom:alert-ticker-card
      cycle_interval: 20
      alerts:
        - entity: switch.hdo
          state: "off"
          message: "High tariff active"
          theme: emergency
```

---

## Using alongside alert-ticker-card

Navbar Card works seamlessly with [alert-ticker-card](https://github.com/mkelec101/alert-ticker-card).
Place it in the `slots.bottom` section (config stored server-side) or alongside in a `vertical-stack`:

```yaml
type: vertical-stack
cards:
  - type: custom:navbar-card
    config_id: main
  - type: custom:alert-ticker-card
    # ... your alert config
```

---

## Development

```bash
npm install
npm run build    # production build → dist/navbar-card.js
npm run dev      # watch mode with source maps
npm run lint     # TypeScript type check
```

---

## Roadmap

| Version | Milestone |
|---|---|
| v0.1 | Project skeleton, backend WS API, placeholder tiles |
| v0.2 | Room tile visuals – background image, CSS filters, border |
| v0.3 | Sensor overlays with colour thresholds |
| v0.4 | Actions – tap / hold / double-tap, browser_mod popup |
| v0.5 | Visual card editor (GUI configuration) |
| v0.6 | Alert ticker slot, slots architecture |
| v1.0 | HACS default repository submission |

---

## License

MIT © YOUR_USERNAME
