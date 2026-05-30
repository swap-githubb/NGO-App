/**
 * Nextrise India Foundation — Brand Color Palette
 * Extracted from the official logo: vibrant orange sun + golden arrow motif
 *
 * Usage: Import this file in main.jsx to inject CSS custom properties globally.
 */

const colors = {
  /* ── Primary Brand Colors ─────────────────────────────────── */
  primaryOrange:    '#F5A623',   // The vibrant orange sun
  deepOrange:       '#E8941A',   // Darker orange for hover/active states
  burntOrange:      '#D17A0A',   // Deep accent for CTAs

  /* ── Gold / Bronze Family ─────────────────────────────────── */
  darkGold:         '#8B6914',   // Arrow body & logo text — strong contrast
  mediumGold:       '#C4962C',   // Arrow highlights
  lightGold:        '#D4A843',   // Subtle gold accents
  paleGold:         '#E8C96A',   // Badges, tags

  /* ── Warm Neutrals ────────────────────────────────────────── */
  warmWhite:        '#FFF8F0',   // Page background
  cream:            '#FFFBF2',   // Card backgrounds
  lightPeach:       '#FFF0DB',   // Section alt background
  softOrange:       '#FBD38D',   // Decorative elements

  /* ── Text Colors ──────────────────────────────────────────── */
  darkText:         '#2D1B00',   // Headings
  bodyText:         '#4A3520',   // Body copy
  mutedText:        '#7A6550',   // Captions, secondary info

  /* ── Utility ──────────────────────────────────────────────── */
  white:            '#FFFFFF',
  overlay:          'rgba(45, 27, 0, 0.55)',  // Dark overlay for hero images
  overlayLight:     'rgba(245, 166, 35, 0.08)', // Orange tint overlay
  cardShadow:       'rgba(139, 105, 20, 0.12)', // Gold-tinted shadow
  success:          '#2E7D32',   // Positive actions
  heartRed:         '#C62828',   // Donate / urgent
};

/**
 * Injects all brand colors as CSS custom properties on :root.
 * Call once at app startup (main.jsx).
 */
export function injectColorVariables() {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    // Convert camelCase → kebab-case: primaryOrange → --color-primary-orange
    const cssVar = '--color-' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
    root.style.setProperty(cssVar, value);
  });
}

export default colors;
