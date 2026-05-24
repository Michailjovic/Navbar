"""Config flow for Navbar Card integration."""
from __future__ import annotations

from homeassistant.config_entries import ConfigFlow, ConfigFlowResult
from homeassistant.core import callback

from .const import DOMAIN


class NavbarConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Navbar Card.

    The integration has no user-configurable options – this flow exists
    purely so users can add it via the HA integrations UI instead of
    editing configuration.yaml manually.
    """

    VERSION = 1

    async def async_step_user(
        self, user_input: dict | None = None
    ) -> ConfigFlowResult:
        """Handle the initial step."""
        # Prevent duplicate entries
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()

        if user_input is not None:
            return self.async_create_entry(title="Navbar Card", data={})

        return self.async_show_form(step_id="user")
