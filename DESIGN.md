---
name: Palawa Surf & SUP
description: Canal vacío hacia WhatsApp — balizas de modalidad sobre campo de agua.
colors:
  accent-buoy: "#F4C95F"
  field-sky: "#9FD0E0"
  field-deep: "#0B3A4A"
  foam: "#E8F4F8"
  panel: "#FFFFFF"
  ink: "#0B3A4A"
  on-water: "#E8F4F8"
  muted: "#4D6B75"
  subtle: "#7A949C"
  footer-abyss: "#082E3B"
  line: "rgba(11, 58, 74, 0.16)"
  line-strong: "rgba(11, 58, 74, 0.28)"
  line-on-water: "rgba(232, 244, 248, 0.35)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 8vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.04em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  buoy: "50%"
spacing:
  xs: "0.4rem"
  sm: "0.65rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  container: "1120px"
  header: "76px"
  header-scrolled: "64px"
components:
  button-gold:
    backgroundColor: "{colors.accent-buoy}"
    textColor: "{colors.field-deep}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
    height: "52px"
  button-gold-hover:
    backgroundColor: "{colors.accent-buoy}"
    textColor: "{colors.field-deep}"
  button-deep:
    backgroundColor: "{colors.field-deep}"
    textColor: "{colors.on-water}"
    rounded: "{rounded.none}"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 0.9rem"
  header-cta:
    backgroundColor: "{colors.accent-buoy}"
    textColor: "{colors.field-deep}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    height: "42px"
  channel-row:
    backgroundColor: "rgba(11, 58, 74, 0.38)"
    textColor: "{colors.on-water}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1rem"
  channel-row-hover:
    backgroundColor: "rgba(11, 58, 74, 0.58)"
    textColor: "{colors.on-water}"
  booking-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 0.9rem"
  booking-toggle-checked:
    backgroundColor: "{colors.field-deep}"
    textColor: "{colors.on-water}"
    rounded: "{rounded.none}"
---

# Design System: Palawa Surf & SUP

## Overview

**Creative North Star: "Channel Markers"**

The interface is an empty navigation channel toward WhatsApp: a full-bleed water field, one condensed headline, one short line of support, one gold CTA, and three buoy rows that mark modalities. Depth comes from the sky-to-abyss gradient and translucent ink panels, not from cards, shadows, or marketing sections.

Personality is coastal and operational — clear, 1-to-1, Uruguay Spanish — never decorative school brochure. Density is sparse: every element earns its place by helping the visitor assemble a consultation. Confirmed visual rejections: inset hero cards, eyebrows/kickers, pill clusters, multi-section marketing scroll, and soft Material corner radii.

**Key Characteristics:**
- Full-viewport water gradient as the primary atmosphere (`#9FD0E0` → `#0B3A4A`)
- Buoy gold (`#F4C95F`) reserved for CTAs, focus, and row hover borders
- Square geometry everywhere (`0px` radius); circular only for the buoy marker glyph
- Barlow Condensed uppercase for brand signals; IBM Plex Sans for body and proof
- Modality list as flat marker rows, not cards

## Colors

Cool coastal water field with a single buoy accent. Light foam ink sits on the deep field; foam surfaces carry booking UI above ink text.

### Primary
- **Buoy Gold** (`#F4C95F`): Primary action and signal — channel CTA, header CTA, focus ring, selection highlight, modal progress `is-on`, and channel-row hover border. Rarity is intentional.

### Neutral
- **Field Sky** (`#9FD0E0`): Top of the channel gradient; open water / sky plane.
- **Field Deep** (`#0B3A4A`): Base page background, gradient terminus, primary ink for light surfaces, deep button fill.
- **Foam** (`#E8F4F8`): Light text on water (`on-water`) and booking dialog surface.
- **Panel** (`#FFFFFF`): WhatsApp preview block and pure light panels inside the dialog.
- **Ink** (`#0B3A4A`): Body text on foam/panel surfaces (same value as field deep).
- **Muted** (`#4D6B75`): Supporting copy and field labels in booking.
- **Subtle** (`#7A949C`): Micro labels (summary `dt`).
- **Footer Abyss** (`#082E3B`): Slim footer band, one step darker than field deep.
- **Line / Line Strong / Line on Water**: Hairline structure on light (`rgba(11,58,74,0.16|0.28)`) and water (`rgba(232,244,248,0.35)`).

### Named Rules
**The Buoy Accent Rule.** Gold appears only as action or focus signal — CTAs, `:focus-visible`, progress `is-on`, and row hover borders. Do not wash large surfaces in gold.

**The Water Field Rule.** The first composition is the gradient field itself. Do not replace it with a flat single-color page or an inset media card.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif)
**Body Font:** IBM Plex Sans (with system-ui, sans-serif)

**Character:** Condensed nautical signal for brand verbs and modality names; clean technical sans for instructions and proof. No serif, no system display face.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 8vw, 4.5rem)`, line-height 0.95, uppercase, tracking `-0.01em`): Channel headline only; max ~10ch.
- **Headline** (700, `1.25rem`, tracking `0.04em`, uppercase): Channel-row modality labels.
- **Title** (700, ~`1.15rem`, tracking `0.06em`, uppercase): Gold CTAs and footer brand wordmark.
- **Body** (400, `1.05rem` sub / `1rem` base, line-height 1.5): Supporting sentence, footer lines, dialog copy; channel sub max ~30ch.
- **Label** (400, `0.78rem`–`0.82rem`, tracking `0.04em`–`0.08em`): Header proof, channel foot, summary keys (summary keys uppercase).

### Named Rules
**The Condensed Signal Rule.** Uppercase Barlow Condensed is for brand verbs and modality markers. Body copy stays sentence-case IBM Plex Sans.

**The One Headline Rule.** The first viewport carries one display line. Do not stack competing display blocks or decorative eyebrows above it.

## Layout

Spatial model is a single full-viewport **channel**: fixed translucent header (`76px`, shrinks to `64px` on scroll), then a shell capped at `1120px` with fluid gutters `clamp(1.25rem, 4vw, 3.5rem)`. Below `900px` the channel stacks (copy then buoy rows); at `900px+` it becomes a two-column grid (`1.05fr / 0.95fr`) aligned to the end. Vertical rhythm uses `2rem` between major blocks and `0.65rem` between buoy rows. Booking option grids collapse from two columns to one under `720px`. Density stays sparse — no secondary marketing bands in the first composition.

### Named Rules
**The Empty Channel Rule.** The landing job is assemble → WhatsApp. Do not add gallery, FAQ, process, marquee, or long-form school sections to the primary channel.

## Elevation & Depth

No box-shadow vocabulary. Depth is tonal: the vertical water gradient, translucent deep panels on the field (`rgba(11,58,74,0.38)` → `0.58` on hover), frosted header (`backdrop-filter: blur(12px)` with `rgba(11,58,74,0.72|0.92)`), and hairline borders. Booking dialog is a flat foam surface with square corners.

### Named Rules
**The Flat Marker Rule.** Surfaces stay flat. Hover deepens the ink wash and shifts the row — it does not lift with shadow.

## Shapes

Form language is square and navigational. All interactive chrome uses `border-radius: 0` (Material system corners forced to `0px`). The only circle is the buoy marker glyph (`1.5rem`, `border-radius: 50%`). Borders are 1px structural lines; diamond micro-markers (`0.45rem` rotated square) appear only as booking list ornaments, not as a general icon system.

### Named Rules
**The Zero Radius Rule.** UI chrome is square. Do not reintroduce Material soft corners or pill CTAs.

## Components

### Buttons
- **Shape:** Square (`0px`); min-height `48px` (channel CTA `52px`, header CTA `42px`).
- **Gold (primary action):** Buoy fill on deep text; display font, uppercase, tracking `0.06em`. Used for «Armar consulta» in channel and header.
- **Deep:** Field-deep fill on foam text — secondary solid actions inside booking.
- **Outline:** Transparent with `line-strong` stroke on ink — booking cancel / secondary.
- **Hover / Focus:** Focus ring is `2px` buoy gold, offset `3px`. Gold buttons keep fill; channel rows handle hover motion separately.

### Cards / Containers
- **Not used on the landing.** Modality choices are channel rows, not cards. Do not wrap content in bordered floating cards on the water field.
- **Booking panel:** Flat foam dialog, square, padding ~`1.25rem`; WhatsApp preview is a white bordered block, not a card elevation.

### Inputs / Fields
- **Style:** Angular Material fields on foam; labels in muted.
- **Focus:** Global buoy gold outline.
- **Option toggles:** Full-width square strokes; checked state fills field-deep with on-water text.

### Navigation
- **Header:** Fixed frosted deep bar; logo left; proof string + gold CTA right. On scroll, height `76px` → `64px`, background opacity rises.
- **Footer:** Slim abyss band; condensed brand + location; underlined WhatsApp and Maps links.

### Channel Row (signature)
- **Character:** A buoy marker in a single navigational line — not a card.
- **Structure:** Grid `2rem | 1fr | auto`; translucent deep wash; `line-on-water` border; buoy image + uppercase label + faint number.
- **Hover / Focus:** Darker wash, buoy border, `translateX(4px)` with `--ease-out`.
- **Motion:** Buoy bob `2.8s` ease-in-out (`translateY(-4px)`); staggered delay per row. Disabled under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep the first viewport as one channel: brand, one headline, one sub, one gold CTA, three buoy rows.
- **Do** use buoy gold only for action and focus signals.
- **Do** set all chrome radii to `0px`; keep the buoy glyph circular.
- **Do** set modality choices as flat marker rows with hairline borders on the water field.
- **Do** honor `prefers-reduced-motion` by removing bob and row transitions.

### Don't:
- **Don't** introduce eyebrows, kickers, or pill clusters above the headline.
- **Don't** place inset hero media cards, rounded media tiles, or floating image blocks on the channel.
- **Don't** use drop shadows to fake elevation.
- **Don't** expand the landing into multi-section brochure content (gallery, FAQ, process, marquee).
- **Don't** soften Material corners or restyle CTAs as rounded pills.
