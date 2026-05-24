/**
 * Popup engine for Navbar Card.
 *
 * Priority:
 *   1. browser_mod v2   – window.browser_mod.service("popup", ...)
 *   2. ha-dialog        – HA's own <ha-dialog> web component
 *   3. Custom overlay   – plain DOM fallback (always works)
 *
 * Cards inside the popup are rendered by calling setConfig()+hass on the
 * registered custom element directly, which is the same technique HA itself
 * uses in hui-card-preview.
 */

import type { HomeAssistant } from "./types";

// ------------------------------------------------------------------ types ---

type PopupSize = "small" | "normal" | "wide" | "fullscreen";

interface BrowserModV2 {
  service(name: string, data: Record<string, unknown>): void;
}

// ------------------------------------------------------------------ utils ---

function hasBrowserMod(): boolean {
  return typeof window !== "undefined" &&
    !!(window as unknown as Record<string, unknown>)["browser_mod"];
}

function getBrowserMod(): BrowserModV2 | undefined {
  return (window as unknown as Record<string, BrowserModV2>)["browser_mod"];
}

function sizeClass(size: PopupSize): Record<string, boolean> {
  return {
    large:      size === "wide" || size === "fullscreen",
    wide:       size === "wide",
    fullscreen: size === "fullscreen",
  };
}

function maxWidth(size: PopupSize): string {
  switch (size) {
    case "small":      return "380px";
    case "wide":       return "860px";
    case "fullscreen": return "100vw";
    default:           return "560px";
  }
}

// --------------------------------------------------- card element factory ---

/**
 * Create a Lovelace card element from a raw card config.
 * Uses the same technique HA uses internally.
 */
function buildCardElement(
  hass: HomeAssistant,
  config: Record<string, unknown>
): HTMLElement {
  const tag = (config.type as string | undefined) ?? "";
  let el: HTMLElement & {
    setConfig?: (c: Record<string, unknown>) => void;
    hass?: HomeAssistant;
  };

  // Custom element tags start with "custom:" in Lovelace YAML but the actual
  // DOM tag has no prefix – strip it.
  const domTag = tag.startsWith("custom:") ? tag.slice(7) : tag;

  if (domTag && customElements.get(domTag)) {
    el = document.createElement(domTag) as typeof el;
  } else {
    // Fallback: create an ha-card shell showing raw JSON
    el = document.createElement("ha-card") as typeof el;
    const inner = document.createElement("div");
    inner.style.cssText =
      "padding:12px;font-size:11px;white-space:pre-wrap;word-break:break-all;" +
      "color:var(--secondary-text-color);";
    inner.textContent = JSON.stringify(config, null, 2);
    el.appendChild(inner);
    return el;
  }

  try {
    if (typeof el.setConfig === "function") el.setConfig(config);
    el.hass = hass;
  } catch (err) {
    console.warn("[navbar-card] popup: setConfig failed for", domTag, err);
  }
  return el;
}

// ---------------------------------------- browser_mod v2 popup handler ---

function openViaBrowserMod(
  _hass: HomeAssistant,
  title: string | undefined,
  size: PopupSize,
  cards: Record<string, unknown>[]
): boolean {
  const bm = getBrowserMod();
  if (!bm) return false;

  // browser_mod v2 "popup" service accepts a single card config.
  // Wrap multiple cards in a vertical-stack.
  const content =
    cards.length === 1
      ? cards[0]
      : { type: "vertical-stack", cards };

  try {
    bm.service("popup", {
      title: title ?? "",
      content,
      ...sizeClass(size),
    });
    return true;
  } catch (err) {
    console.warn("[navbar-card] browser_mod popup failed:", err);
    return false;
  }
}

// ----------------------------------------------- ha-dialog fallback ---

function openViaHaDialog(
  hass: HomeAssistant,
  title: string | undefined,
  size: PopupSize,
  cards: Record<string, unknown>[]
): boolean {
  if (!customElements.get("ha-dialog")) return false;

  type HaDialog = HTMLElement & { open?: boolean; heading?: string };
  const dialog = document.createElement("ha-dialog") as HaDialog;

  if (title) {
    const headingEl = document.createElement("span");
    headingEl.setAttribute("slot", "heading");
    headingEl.textContent = title;
    dialog.appendChild(headingEl);
  }

  const content = document.createElement("div");
  content.style.cssText =
    `min-width:${maxWidth(size)};max-width:${maxWidth(size)};padding:0 0 16px;`;

  for (const cardConfig of cards) {
    const cardEl = buildCardElement(hass, cardConfig);
    cardEl.style.cssText = "display:block;margin-bottom:8px;";
    content.appendChild(cardEl);
  }

  // Close button in the action slot
  const closeBtn = document.createElement("mwc-button");
  closeBtn.setAttribute("slot", "primaryAction");
  closeBtn.setAttribute("dialogAction", "close");
  closeBtn.textContent = "Close";
  dialog.appendChild(closeBtn);

  dialog.appendChild(content);
  document.body.appendChild(dialog);
  dialog.open = true;

  dialog.addEventListener("closed", () => dialog.remove(), { once: true });
  return true;
}

// ----------------------------------------------- pure-DOM overlay fallback ---

function openViaOverlay(
  hass: HomeAssistant,
  title: string | undefined,
  size: PopupSize,
  cards: Record<string, unknown>[]
): void {
  const mw = maxWidth(size);
  const fullscreen = size === "fullscreen";

  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:99999;" +
    "background:rgba(0,0,0,0.6);backdrop-filter:blur(3px);" +
    "display:flex;align-items:center;justify-content:center;";

  const modal = document.createElement("div");
  modal.style.cssText =
    `background:var(--card-background-color,#1c1c1c);` +
    `border-radius:${fullscreen ? "0" : "16px"};` +
    `max-width:${mw};width:calc(100% - ${fullscreen ? "0" : "32px"});` +
    `max-height:${fullscreen ? "100vh" : "90vh"};overflow:auto;` +
    `box-shadow:0 24px 48px rgba(0,0,0,0.5);`;

  // Header
  if (title) {
    const header = document.createElement("div");
    header.style.cssText =
      "display:flex;align-items:center;justify-content:space-between;" +
      "padding:20px 20px 12px;font-size:18px;font-weight:600;" +
      "color:var(--primary-text-color);" +
      "border-bottom:1px solid rgba(var(--rgb-primary-text-color,255,255,255),0.1);";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = title;

    const closeX = document.createElement("button");
    closeX.textContent = "✕";
    closeX.style.cssText =
      "background:none;border:none;cursor:pointer;font-size:16px;padding:4px 8px;" +
      "color:var(--secondary-text-color);border-radius:6px;line-height:1;";
    closeX.addEventListener("click", () => overlay.remove());

    header.appendChild(titleSpan);
    header.appendChild(closeX);
    modal.appendChild(header);
  }

  // Card content
  const body = document.createElement("div");
  body.style.cssText = "padding:16px;display:flex;flex-direction:column;gap:8px;";

  for (const cardConfig of cards) {
    const cardEl = buildCardElement(hass, cardConfig);
    body.appendChild(cardEl);
  }

  modal.appendChild(body);
  overlay.appendChild(modal);

  // Close on backdrop click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });

  // Close on Escape
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") { overlay.remove(); window.removeEventListener("keydown", onKey); }
  };
  window.addEventListener("keydown", onKey);

  document.body.appendChild(overlay);
}

// -------------------------------------------------------- public API ---

/**
 * Open a popup.  Tries browser_mod first, then ha-dialog, then a custom overlay.
 */
export function openPopup(
  hass: HomeAssistant,
  _host: HTMLElement,
  title: string | undefined,
  size: PopupSize | undefined,
  cards: Record<string, unknown>[] | undefined
): void {
  const popupSize: PopupSize = size ?? "normal";
  const cardConfigs = cards ?? [];

  if (hasBrowserMod() && openViaBrowserMod(hass, title, popupSize, cardConfigs)) return;
  if (openViaHaDialog(hass, title, popupSize, cardConfigs)) return;
  openViaOverlay(hass, title, popupSize, cardConfigs);
}
