## Purpose

Defines the visual language — color tokens, typography, dark theme, motion
primitives, and brand asset usage — that every page and component in the
MFlow site must conform to, so the site reads as a single premium,
consistent product rather than a set of disconnected pages.

## ADDED Requirements

### Requirement: Color tokens
The system SHALL expose the MFlow palette as reusable design tokens: primary
`#2563EB`, secondary `#14B8A6`, accent `#22C55E`, background `#020617`, card
surface `#0F172A`, border `#1E293B`, and white text — and every page SHALL
use only these tokens (or documented tints/shades of them) for themed color
values.

#### Scenario: Consistent background and surfaces
- **WHEN** any page in the site is rendered
- **THEN** the page background resolves to `#020617` and card/section
  surfaces resolve to `#0F172A` with `#1E293B` borders

### Requirement: Default dark theme
The system SHALL render in dark theme by default on first load, with no
required user action or flash of an unstyled/light theme.

#### Scenario: First visit has no theme flash
- **WHEN** a visitor loads any page for the first time with no stored
  preference
- **THEN** the page renders in dark theme immediately, without a visible
  flash of light-themed content

### Requirement: Typography
The system SHALL use "Inter" as the primary body typeface and "Manrope" for
headings/display text, loaded so that text remains visible during font load
(no invisible text).

#### Scenario: Headings use the display face
- **WHEN** a visitor views any page heading (e.g. the hero headline or a
  section title)
- **THEN** the heading is rendered in the Manrope font family, and body copy
  is rendered in the Inter font family

### Requirement: Brand asset usage
The system SHALL use the official MFlow brand assets for their designated
purposes: the light-background logo variant on any light-colored surface,
the dark-background logo variant on any dark-colored surface (including the
default dark navbar/footer), and the supplied icon artwork as the site
favicon, the PWA/app icon, and the source for the social share (Open Graph)
image.

#### Scenario: Logo contrast on dark navbar
- **WHEN** the navbar (dark surface) is rendered
- **THEN** the logo variant intended for dark backgrounds is used, and the
  logo remains legible against the surface

#### Scenario: Favicon and share image are branded
- **WHEN** the site is loaded in a browser tab or shared as a link
- **THEN** the browser tab icon and the link preview image both derive from
  the official MFlow icon artwork, not a generic placeholder

### Requirement: Motion primitives
The system SHALL provide reusable scroll-triggered fade/slide-in reveals,
floating-card idle animation, animated gradient "blob" backgrounds, hover
state transitions on interactive elements, a button press ripple effect, and
glassmorphism surface styling (translucent blurred background), implemented
with CSS transitions/animations or Vue `<Transition>` — with no third-party
animation library dependency.

#### Scenario: Content reveals on scroll
- **WHEN** a visitor scrolls a section into the viewport for the first time
- **THEN** that section transitions from hidden/offset to fully visible via
  a CSS-driven animation, and does not re-trigger on every scroll frame

#### Scenario: Route change transitions smoothly
- **WHEN** a visitor navigates between two routes (e.g. `/` to `/privacy`)
- **THEN** the outgoing and incoming views cross-fade/transition rather than
  swapping instantly with a hard cut

### Requirement: Responsive layout
Every page SHALL render without horizontal scrolling or overlapping content
at common desktop, tablet, and mobile viewport widths.

#### Scenario: Mobile viewport renders cleanly
- **WHEN** any page is viewed at a mobile viewport width (e.g. 375px)
- **THEN** all content reflows into a single readable column with no
  horizontal scrollbar and no overlapping elements
