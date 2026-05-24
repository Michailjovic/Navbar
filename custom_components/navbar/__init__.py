"""Navbar Card – Home Assistant integration."""
from __future__ import annotations

import logging
from pathlib import Path

import homeassistant.helpers.config_validation as cv
from homeassistant.components.frontend import add_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN
from .store import NavbarConfigStore
from .websocket_api import async_setup_websocket

_LOGGER = logging.getLogger(__name__)

WWW_DIR = Path(__file__).parent / "www"
CARD_URL = "/navbar_card_static/navbar-card.js"

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the Navbar domain (YAML-based bootstrap)."""
    hass.data.setdefault(DOMAIN, {})
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Navbar Card from a config entry."""
    hass.data.setdefault(DOMAIN, {})

    # ── Persistent store ────────────────────────────────────────────────────
    store = NavbarConfigStore(hass)
    await store.async_load()
    hass.data[DOMAIN]["store"] = store

    # ── WebSocket API ────────────────────────────────────────────────────────
    async_setup_websocket(hass)

    # ── Serve navbar-card.js and register as Lovelace resource ──────────────
    card_file = WWW_DIR / "navbar-card.js"
    if card_file.exists():
        try:
            await hass.http.async_register_static_paths([
                StaticPathConfig(CARD_URL, str(card_file), cache_headers=False)
            ])
            add_extra_js_url(hass, CARD_URL)
            _LOGGER.info("Navbar Card: registered Lovelace resource at %s", CARD_URL)
        except Exception as err:  # noqa: BLE001
            _LOGGER.warning("Navbar Card: could not register JS resource: %s", err)
    else:
        _LOGGER.warning(
            "Navbar Card: navbar-card.js not found at %s – "
            "frontend card will not load. Re-install the integration.",
            card_file,
        )

    _LOGGER.info("Navbar Card integration ready")
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    hass.data.get(DOMAIN, {}).pop("store", None)
    return True
