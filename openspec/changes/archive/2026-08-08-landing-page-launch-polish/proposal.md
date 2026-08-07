## Why

Post-launch review of the landing page (built in `mflow-marketing-site`)
surfaced four small but real UX gaps: the "Download on Google Play" CTA had
no store icon, the hero's "See features" link jumped instantly instead of
smoothly, the "Why MFlow" section had a ragged 7-item grid, and two card
components didn't stretch to match their row sibling's height. These were
fixed directly in the codebase rather than through the propose-first flow;
this change captures that work retroactively so it's reflected in specs, and
records what's still open.

Note: the `openspec` CLI is not installed in this environment (checked via
`command -v openspec` and `npx openspec --version`, neither resolves), so
this change's artifacts were hand-authored following the file/delta-spec
format already established by `openspec/changes/mflow-marketing-site/`.

## What Changes

- Add a Play icon (`PlayCircleIcon`, `@heroicons/vue/24/solid`) to the
  "Download on Google Play" button's existing `icon-left` slot at all 4
  call sites (navbar desktop, navbar mobile menu, hero CTA, final CTA).
  Explicit decision: keep the site's own `AppButton` gradient styling
  rather than swapping in Google's official badge artwork.
- Add a custom eased scroll (`src/composables/useSmoothScroll.ts`,
  `requestAnimationFrame` + `easeOutCubic`, 900ms) used uniformly by the
  navbar/footer hash links (via `router/index.ts`'s `scrollBehavior`) and
  the hero's "See features" button (via a direct click handler). This
  replaced an initial, simpler attempt — a global `scroll-behavior: smooth`
  CSS rule — after live testing showed it produced a slow, laggy start
  followed by an abrupt jump to the final position: the CSSOM spec defines
  `behavior: 'auto'` as "defer to the CSS `scroll-behavior` property" (not
  "instant" as assumed), so the custom loop's own incremental `scrollTo`
  calls were each being native-smoothed by that global CSS rule on top of
  the JS easing, compounding into a stuttering double-animation. The CSS
  rule was removed once the JS-driven scroller replaced it. The animation
  also cancels itself if the user scrolls/touches manually mid-animation,
  or if a new scroll starts before the previous one finishes, so rapid
  clicks or manual scroll input don't fight it. Respects
  `prefers-reduced-motion` (jumps instantly).
- Add an 8th "Why MFlow" reason, "No Account Required" (lucide `DoorOpen`
  icon), grounded in copy already on the page (the final CTA already reads
  "no account required to start"). This turns the previous ragged 7-item
  2-column grid (odd count, lone left-pinned last row) into a clean 4-row
  grid.
- Fix `WhyCard.vue` and `FeatureCard.vue`: add `h-full` to each component's
  root bordered `div`. Root cause: both cards render inside a
  `RevealSection` wrapper that is the direct CSS grid item in the parent
  `grid` container; the grid's default `align-items: stretch` correctly
  stretches that wrapper to the row's tallest item, but the bordered card
  nested inside it had no height rule, so it sized to its own content
  instead — a card with a 1-line description ended in a visibly shorter
  box than its 2-line-description row sibling even though the invisible
  wrapper heights already matched. (An earlier attempt — reserving
  `min-h-11` on the description text — was tried first, judged the wrong
  fix for the actual bug, and replaced with this one.)

## Explicitly Deferred / Not Resolved By This Change

- **Play Store URL**: `PLAY_STORE_URL = '#'` remains a placeholder in
  `NavBar.vue` and `HomePage.vue` — the real Play Store listing doesn't
  exist yet. Follow-up once it does: swap the constant everywhere it's
  defined.
- **Why-MFlow section width**: the section's content container uses
  `max-w-5xl` while the navbar, feature grid, and footer all use
  `max-w-7xl`, so its card grid sits visibly inset from the edges every
  other section's content reaches — it doesn't share the page's horizontal
  rhythm. A `max-w-7xl` + `lg:grid-cols-4` fix was tried and reverted
  ("looks odd, revert"). The right resolution is still open and is *not*
  captured as a satisfied requirement below.

## Capabilities

### Modified Capabilities
- `marketing-site`: the "Why MFlow" section requirement now lists 8
  reasons (adds "No Account Required").
- `brand-design-system`: adds a CTA-icon convention, an in-page
  smooth-scroll requirement, and a grid-card equal-height requirement.

## Impact

- **Affected code**: `src/components/NavBar.vue`, `src/pages/HomePage.vue`,
  `src/components/WhyCard.vue`, `src/components/FeatureCard.vue`,
  `src/style.css`, `src/router/index.ts`, new
  `src/composables/useSmoothScroll.ts`.
- **Dependencies**: none added — `PlayCircleIcon` ships in the existing
  `@heroicons/vue` dependency.
- **Verification**: `npm run build` (type-check + production build) passes
  cleanly, and the scroll behavior was confirmed live in a browser.
