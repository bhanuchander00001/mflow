## ADDED Requirements

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
a custom animation — see design.md), SHALL yield immediately if the
visitor scrolls or touches the page manually during the animation, and
SHALL NOT animate at all when the visitor has requested reduced motion.

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
