## Context

Four landing-page polish items were reported against the shipped
`mflow-marketing-site` build, each traced to a specific root cause in the
existing code before fixing. See `proposal.md` for the what/why; this
covers the reasoning behind each fix.

## Decisions

**Play icon via the existing `icon-left` slot, not Google's official
badge.** `AppButton.vue` already exposes `icon-left`/`icon-right` slots,
unused until now. The user explicitly chose to keep the site's own
gradient-button design system over dropping in Google's official "Get it
on Google Play" badge artwork — the badge would have required sourcing a
locale-correct asset from Google's brand-guideline generator and would
have broken visual consistency with every other button on the site (the
"See features" ghost button sits right next to it in the hero). Using
`PlayCircleIcon` from the already-installed `@heroicons/vue` keeps the
change dependency-free.

**Custom `requestAnimationFrame` scroller, not native `scroll-behavior:
smooth`.** The first attempt was a one-line global `scroll-behavior:
smooth` CSS rule, reasoned as the simplest fix for the Hero's "See
features" plain `<a href="#features">` (which bypasses vue-router's
`scrollBehavior` entirely, since a same-page fragment jump never reaches
the router). That shipped, but a follow-up request to slow down and
further smooth the navbar/footer/hero scrolling exposed two problems with
the native approach: (1) `scroll-behavior: smooth` has no speed/easing
control — the browser picks its own (fast) duration, and (2) once a
custom JS animation was layered in to get that control, the still-present
global CSS rule actively fought it: per the CSSOM spec, `behavior: 'auto'`
means "defer to the CSS `scroll-behavior` property", not "instant", so
every incremental `window.scrollTo` call inside the custom loop was
*itself* being native-smoothed on top of the loop's own easing —
live-tested in a browser as a slow, laggy start followed by an abrupt jump
to the final position once the loop stopped feeding it new targets. Fix:
delete the global CSS rule, and drive every in-page anchor (navbar/footer
via `router/index.ts`'s `scrollBehavior`, and the hero's "See features"
via a direct click handler) through one shared `requestAnimationFrame` +
`easeOutCubic` scroller (`useSmoothScroll.ts`) so behavior and speed are
identical and fully controlled, at a duration of 900ms — slower than any
native browser default. It also cancels itself if the user scrolls/touches
manually mid-flight, or if a second scroll starts before the first
finishes, so it never fights user input or itself.

**"No Account Required" as the 8th Why-MFlow reason, sourced from existing
page copy.** Rather than inventing an unverified trust claim, the final
CTA section already states "no account required to start" — promoting
that into a Why-card is a true statement already implicitly made elsewhere
on the page. This was a user-confirmed content decision, not a layout-only
fix (adding any 8th item would have resolved the odd-count grid ragged
edge, but this one didn't require fabricating a new fact).

**`h-full` on the card root, not a `min-height` on the description text.**
The first fix attempted was reserving `min-h-11` (2 lines' worth) on the
`WhyCard` description `<p>`, on the theory that uneven line counts were
the problem. Visual inspection after that fix (via a fresh screenshot)
showed the actual bug was structural, not textual: `RevealSection`'s root
`<div>` is the real CSS grid item, and grid's default `align-items:
stretch` was already correctly stretching *that* wrapper to the row's
tallest sibling — but the visibly bordered card `<div>` nested one level
inside it had no height rule, so its border box sized to its own content
and ended short. `h-full` on the card makes it fill the space its already-
stretched parent provides, so borders in the same row align regardless of
how many lines the description wraps to. This is the correct fix, and one
that scales to any future copy change without needing a tuned pixel value.
Applied to `FeatureCard.vue` too for the same structural reason, even
though the feature grid's current content happens to have matched line
counts per row (defensive — the bug is latent there, not absent).

## Risks / Trade-offs

- **Why-MFlow section width remains visually inconsistent** with the rest
  of the page (`max-w-5xl` vs. `max-w-7xl` elsewhere). A same-width fix
  was tried and rejected as "looks odd" — likely because naively widening
  the container without redesigning card proportions/column count made
  the section feel sparse. This needs a considered layout pass, not a
  one-line container-class change, and is left for a follow-up change.
- **Play Store URL stays `'#'`** everywhere it's referenced — cosmetic
  until the app is actually listed; no functional risk to the site itself
  in the meantime (the button still renders and is clickable, just goes
  nowhere).
