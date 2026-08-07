# brand-design-system Specification

## Purpose

Defines the visual language — color tokens, typography, dark theme, motion
primitives, and brand asset usage — that every page and component in the
MFlow site must conform to, so the site reads as a single premium,
consistent product rather than a set of disconnected pages.

## Requirements

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

### Requirement: Download CTA icon
Every "Download on Google Play" call-to-action button SHALL display a Play
icon alongside its label, using the site's own button styling rather than
third-party badge artwork, consistently across every placement (navbar,
hero, final CTA).

#### Scenario: Play icon renders in every CTA placement
- **WHEN** a visitor views the navbar, the hero section, or the final CTA
  section on the landing page
- **THEN** each "Download on Google Play" button displays a Play icon next
  to its label, styled consistently with the site's button design system

### Requirement: Smooth in-page anchor scrolling
Navigating to an in-page anchor (e.g. a "See features" link, a navbar/
footer link to `#features`/`#why-mflow`, or any same-page `#section` link)
SHALL scroll at the same deliberately slow, decelerating pace regardless
of whether the link is implemented as a router-aware link or a plain
anchor tag, SHALL NOT rely on the browser's native `scroll-behavior:
smooth` (which offers no speed control and cannot be safely combined with
a custom animation), SHALL yield immediately if the visitor scrolls or
touches the page manually during the animation, and SHALL NOT animate at
all when the visitor has requested reduced motion.

#### Scenario: In-page link scrolls at a controlled, slower pace
- **WHEN** a visitor clicks a same-page link such as the hero's "See
  features" button or the navbar's "Features"/"Why MFlow" links
- **THEN** the page animates smoothly to the target section at a
  deliberately slower, decelerating pace rather than jumping instantly or
  using the browser's native (fast, uncontrolled-duration) smooth scroll

#### Scenario: Manual scroll interrupts the animation
- **WHEN** a visitor scrolls or touches the page while an in-page anchor
  animation is still running
- **THEN** the animation stops immediately rather than continuing to pull
  the page back toward its target

#### Scenario: A new anchor click interrupts a running animation
- **WHEN** a visitor clicks a second in-page anchor link before the first
  anchor's scroll animation has finished
- **THEN** the first animation stops and the page scrolls toward the new
  target, rather than the two animations fighting each other

#### Scenario: Reduced motion is respected
- **WHEN** a visitor has requested reduced motion at the OS/browser level
- **THEN** in-page anchor navigation jumps instantly instead of animating

### Requirement: Grid card row-height alignment
When feature or reason cards are rendered in a multi-column grid, every
card in the same grid row SHALL render at equal height, so that cards with
shorter text content do not appear visually shorter than their row
siblings.

#### Scenario: Cards with differing description lengths align
- **WHEN** two cards in the same grid row have descriptions of different
  line lengths
- **THEN** both cards' bordered boxes render at the same height, with
  their tops and bottoms aligned

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
