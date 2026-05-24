"""Persistent config store for Navbar Card."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import STORAGE_KEY, STORAGE_VERSION

_LOGGER = logging.getLogger(__name__)


class NavbarConfigStore:
    """Manages named navbar configurations in HA persistent storage."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._store: Store[dict[str, Any]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY
        )
        self._data: dict[str, Any] = {"configs": {}}

    async def async_load(self) -> None:
        """Load persisted data from .storage/."""
        data = await self._store.async_load()
        if data:
            self._data = data
        _LOGGER.debug("Navbar store loaded, configs: %s", list(self._data.get("configs", {}).keys()))

    async def async_get_config(self, config_id: str) -> dict[str, Any] | None:
        """Return a single named config, or None if not found."""
        return self._data.get("configs", {}).get(config_id)

    async def async_list_configs(self) -> list[str]:
        """Return all stored config IDs."""
        return list(self._data.get("configs", {}).keys())

    async def async_save_config(self, config_id: str, config: dict[str, Any]) -> None:
        """Persist a named config."""
        self._data.setdefault("configs", {})[config_id] = config
        await self._store.async_save(self._data)
        _LOGGER.debug("Navbar config '%s' saved", config_id)

    async def async_delete_config(self, config_id: str) -> bool:
        """Delete a named config. Returns True if it existed."""
        if config_id in self._data.get("configs", {}):
            del self._data["configs"][config_id]
            await self._store.async_save(self._data)
            _LOGGER.debug("Navbar config '%s' deleted", config_id)
            return True
        return False
