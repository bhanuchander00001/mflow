## 1. Play Store CTA icon

- [x] 1.1 Import `PlayCircleIcon` from `@heroicons/vue/24/solid` in
      `NavBar.vue` and `HomePage.vue`
- [x] 1.2 Add the icon to the `icon-left` slot on all 4 "Download on Google
      Play" `AppButton` instances: `NavBar.vue` desktop button, `NavBar.vue`
      mobile menu button, `HomePage.vue` hero CTA, `HomePage.vue` final CTA
- [ ] 1.3 Wire the real Play Store listing URL once it exists (currently
      `PLAY_STORE_URL = '#'` in both `NavBar.vue` and `HomePage.vue`) —
      **blocked on the user having a published listing**

## 2. Smooth in-page scrolling

- [x] 2.1 ~~Add `scroll-behavior: smooth` to the `html` selector~~ —
      superseded by 2.2–2.5 below; native CSS smooth-scroll has no speed
      control, and once JS-driven scrolling was added it actively
      conflicted with it (see design.md)
- [x] 2.2 Add `src/composables/useSmoothScroll.ts`: a
      `requestAnimationFrame`-driven eased scroll (`easeOutCubic`, 900ms
      default) used for every in-page anchor, so the nav links, footer
      links, and the hero's "See features" button all move at the same,
      deliberately slower pace instead of the browser's native
      (fast, uncontrollable-duration) smooth scroll
- [x] 2.3 Wire `router/index.ts`'s `scrollBehavior` to call
      `scrollToHash()` (which waits for the target element — needed when
      the target's route hasn't finished mounting yet) and return `false`
      so vue-router doesn't also perform its own native scroll on top
- [x] 2.4 Wire the hero's "See features" button to call `scrollToElement()`
      directly via a click handler (`preventDefault` on the underlying
      anchor; `href="#features"` kept as a no-JS fallback)
- [x] 2.5 Remove the global `scroll-behavior: smooth` CSS rule added in
      2.1 — it was fighting the custom animation. Per the CSSOM spec,
      `behavior: 'auto'` means "defer to the CSS `scroll-behavior`
      property", not "instant", so every one of the custom loop's
      incremental `scrollTo` calls was itself being native-smoothed on
      top of the JS easing — producing a slow, laggy start followed by an
      abrupt jump to the final position once the loop stopped feeding it
      new intermediate targets
- [x] 2.6 Cancel any in-flight scroll animation when a new one starts, and
      when the user scrolls/touches manually mid-animation, so a rapid
      double-click or a manual scroll doesn't fight the animation

## 3. Why-MFlow grid balance

- [x] 3.1 Add "No Account Required" as an 8th reason in `HomePage.vue`'s
      `whyReasons` array, using the lucide `DoorOpen` icon, resolving the
      previous 7-item ragged-grid last row
- [ ] 3.2 Resolve the Why-MFlow section's container-width inconsistency:
      it uses `max-w-5xl` while the navbar/feature grid/footer all use
      `max-w-7xl`, so its content doesn't reach the same edges as the rest
      of the page. A `max-w-7xl` + `lg:grid-cols-4` attempt was tried and
      reverted by the user ("looks odd, revert") — **needs a different
      approach, not yet resolved**

## 4. Card row-height alignment

- [x] 4.1 Add `h-full` to `WhyCard.vue`'s root `div` so the bordered card
      stretches to fill its `RevealSection` grid-item wrapper instead of
      sizing to its own content
- [x] 4.2 Add `h-full` to `FeatureCard.vue`'s root `div` for the same
      structural reason (defensive — the feature grid's current copy
      happens to have matched line counts per row, but the bug is latent)

## 5. Verification

- [x] 5.1 `npm run build` (type-check + production build) passes with no
      errors
- [x] 5.2 Verified live in a browser (Chrome extension) — Features, Why
      MFlow, and See features all scroll at the slower, eased pace with
      no stall/jump artifact; user confirmed
