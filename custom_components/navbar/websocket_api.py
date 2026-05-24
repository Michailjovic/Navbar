"""WebSocket API for Navbar Card – CRUD operations on named configs."""
from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


@callback
def async_setup_websocket(hass: HomeAssistant) -> None:
    """Register all WebSocket commands."""

    # ── GET ──────────────────────────────────────────────────────────────────
    @websocket_api.websocket_command(
        {
            vol.Required("type"): "navbar/get_config",
            vol.Required("config_id"): str,
        }
    )
    @websocket_api.async_response
    async def ws_get_config(
        hass: HomeAssistant,
        connection: websocket_api.ActiveConnection,
        msg: dict[str, Any],
    ) -> None:
        store = hass.data[DOMAIN]["store"]
        config = await store.async_get_config(msg["config_id"])
        if config is None:
            connection.send_error(
                msg["id"],
                websocket_api.const.ERR_NOT_FOUND,
                f"Config '{msg['config_id']}' not found",
            )
        else:
            connection.send_result(msg["id"], config)

    # ── SAVE ─────────────────────────────────────────────────────────────────
    @websocket_api.websocket_command(
        {
            vol.Required("type"): "navbar/save_config",
            vol.Required("config_id"): str,
            vol.Required("config"): dict,
        }
    )
    @websocket_api.async_response
    async def ws_save_config(
        hass: HomeAssistant,
        connection: websocket_api.ActiveConnection,
        msg: dict[str, Any],
    ) -> None:
        store = hass.data[DOMAIN]["store"]
        await store.async_save_config(msg["config_id"], msg["config"])
        connection.send_result(msg["id"], {"success": True})

    # ── LIST ─────────────────────────────────────────────────────────────────
    @websocket_api.websocket_command(
        {
            vol.Required("type"): "navbar/list_configs",
        }
    )
    @websocket_api.async_response
    async def ws_list_configs(
        hass: HomeAssistant,
        connection: websocket_api.ActiveConnection,
        msg: dict[str, Any],
    ) -> None:
        store = hass.data[DOMAIN]["store"]
        configs = await store.async_list_configs()
        connection.send_result(msg["id"], {"configs": configs})

    # ── DELETE ────────────────────────────────────────────────────────────────
    @websocket_api.websocket_command(
        {
            vol.Required("type"): "navbar/delete_config",
            vol.Required("config_id"): str,
        }
    )
    @websocket_api.async_response
    async def ws_delete_config(
        hass: HomeAssistant,
        connection: websocket_api.ActiveConnection,
        msg: dict[str, Any],
    ) -> None:
        store = hass.data[DOMAIN]["store"]
        deleted = await store.async_delete_config(msg["config_id"])
        if not deleted:
            connection.send_error(
                msg["id"],
                websocket_api.const.ERR_NOT_FOUND,
                f"Config '{msg['config_id']}' not found",
            )
        else:
            connection.send_result(msg["id"], {"success": True})

    websocket_api.async_register_command(hass, ws_get_config)
    websocket_api.async_register_command(hass, ws_save_config)
    websocket_api.async_register_command(hass, ws_list_configs)
    websocket_api.async_register_command(hass, ws_delete_config)

    _LOGGER.debug("Navbar WebSocket API registered (4 commands)")
