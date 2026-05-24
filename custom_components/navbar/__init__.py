"""Navbar Card – Home Assistant integration.

Provides persistent storage for named navbar configurations
and exposes them via a WebSocket API consumed by the frontend card.

Installation:
  1. Copy custom_components/navbar/ to your HA config directory.
  2. Add `navbar:` to configuration.yaml.
  3. Restart Home Assistant.
  4. Add dist/navbar-card.js as a Lovelace frontend resource.
"""
from __future__ import annotations

import logging

from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType

from .const import DOMAIN
from .store import NavbarConfigStore
from .websocket_api import async_setup_websocket

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up the Navbar integration."""
    hass.data.setdefault(DOMAIN, {})

    # Initialise and load persistent store
    store = NavbarConfigStore(hass)
    await store.async_load()
    hass.data[DOMAIN]["store"] = store

    # Register WebSocket API
    async_setup_websocket(hass)

    _LOGGER.info("Navbar Card integration ready (v0.1.0)")
    return True
