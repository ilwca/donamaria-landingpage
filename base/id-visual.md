---
name: Serene Heritage
colors:
  surface: '#fafaf4'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ee'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#404940'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#717970'
  outline-variant: '#c0c9be'
  surface-tint: '#2d6a3e'
  primary: '#115128'
  on-primary: '#ffffff'
  primary-container: '#2d6a3e'
  on-primary-container: '#a6e8b0'
  inverse-primary: '#95d59f'
  secondary: '#5f5f57'
  on-secondary: '#ffffff'
  secondary-container: '#e2e0d6'
  on-secondary-container: '#64635b'
  tertiary: '#524528'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b5c3e'
  on-tertiary-container: '#ead5af'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f2ba'
  primary-fixed-dim: '#95d59f'
  on-primary-fixed: '#00210b'
  on-primary-fixed-variant: '#115228'
  secondary-fixed: '#e5e2d9'
  secondary-fixed-dim: '#c9c6bd'
  on-secondary-fixed: '#1c1c16'
  on-secondary-fixed-variant: '#484740'
  tertiary-fixed: '#f5e0ba'
  tertiary-fixed-dim: '#d8c49f'
  on-tertiary-fixed: '#241a03'
  on-tertiary-fixed-variant: '#534529'
  background: '#fafaf4'
  on-background: '#1a1c19'
  surface-variant: '#e3e3de'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built upon a philosophy of "Sophisticated Rusticity." It bridges the gap between the raw, organic beauty of a nature-focused retreat and the high-end refinement of a luxury boutique inn. The visual language evokes a sense of timelessness, calm, and artisanal quality.

The aesthetic blends **Minimalism** with **Tactile** influences. It utilizes generous negative space and a structured editorial layout to communicate premium service, while using soft textures and natural color tones to remain approachable and warm. Every interface element is designed to feel "quiet," allowing photography of the property and its surroundings to take center stage.

## Colors

The palette is rooted in the natural landscape. The **Primary Forest Green** (#2D6A3E) is pulled directly from the logo, representing growth and sanctuary. The **Secondary Cream** (#F5F2E8) serves as the primary canvas, replacing harsh whites to provide a softer, warmer reading experience.

A **Tertiary Sand** (#D9C5A0) is used for decorative accents, dividers, and subtle button states, adding a layer of golden warmth. The **Neutral Charcoal** (#1A1C19) is reserved for high-contrast typography and iconography to ensure peak legibility without the starkness of pure black.

## Typography

This design system uses a high-contrast typographic pairing to reinforce its "Rustic-Sophisticated" narrative.

- **Headlines:** *Bodoni Moda* provides an editorial, fashion-forward feel. Its sharp serifs and vertical stress mirror the elegance of the provided logo. Use it for all major page headings and section titles.
- **Body & Labels:** *Plus Jakarta Sans* offers a soft, modern geometric contrast. Its open counters ensure excellent readability across long descriptions and booking forms.
- **Styling:** Display sizes should utilize slight negative letter-spacing for a more "locked-in" premium look. Labels should always use uppercase with generous letter-spacing to act as sophisticated signposts.

## Layout & Spacing

The layout model follows a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The system prioritizes "breathability," utilizing large vertical gaps between sections to create a relaxed browsing pace.

- **Vertical Rhythm:** Sections are separated by `section-gap` to prevent the UI from feeling cluttered.
- **Alignment:** Content is generally centered or staggered to create an organic, non-linear flow reminiscent of a lifestyle magazine.
- **Responsive Behavior:** On mobile, margins tighten to 20px, and large display fonts scale down to `headline-lg` sizes to maintain balance.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. The goal is to feel grounded and physical, not digital and floating.

- **Surfaces:** Use subtle shifts between the Secondary Cream and a slightly darker "Stone" tint to differentiate containers.
- **Borders:** Use thin (1px) solid lines in the Tertiary Sand or a low-opacity Primary Green to define card edges and input fields.
- **Shadows:** If required for specific interactions (like a booking modal), use "Ambient Shadows"—extremely soft, blurred, and tinted with the Primary Green to maintain a natural, earthy feel.

## Shapes

The shape language is **Soft**. Sharp 90-degree corners are avoided to keep the UI feeling welcoming and organic. However, we avoid overly rounded "bubbly" shapes to maintain the high-end, sophisticated edge.

- **Standard Elements:** Buttons and input fields use a subtle 4px (0.25rem) radius.
- **Featured Containers:** Large imagery or promotional cards use a slightly more pronounced 8px radius.
- **Imagery:** Photos should always feature soft corners to blend into the layout.

## Components

### Buttons
- **Primary:** Solid Primary Green background with Secondary Cream text. 4px corner radius. Bold weight.
- **Secondary:** Transparent background with a 1px Primary Green border.
- **Ghost:** No border, Primary Green text, used for less critical actions like "View Gallery."

### Input Fields & Selects
- Backgrounds should be a shade lighter than the main page surface.
- Borders are 1px Tertiary Sand, turning Primary Green on focus.
- Labels sit above the field in `label-sm` styling.

### Cards
- Cards for "Rooms" or "Amenities" use a minimal style: full-bleed imagery on top, with a cream-colored content area below.
- No heavy shadows; use a 1px border or a subtle background tint to separate the card from the page.

### Navigation
- The header is transparent on scroll-up and becomes a solid Secondary Cream on scroll-down.
- Navigation links use `label-lg` for a refined, intentional feel.

### Unique Components
- **The "Date Picker":** Custom-styled to feel like a boutique calendar, using the Primary Green for selected dates and Sand for ranges.
- **Room Dividers:** Use the thin horizontal line style from the logo to separate sections of text or list items.