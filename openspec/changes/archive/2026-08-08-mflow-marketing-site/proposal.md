## Why

MFlow (the Android app) currently has no public web presence. It needs a fast,
credible, production-ready marketing site — comparable in polish to Stripe,
Linear, or Apple product pages — that explains the product, builds trust
around its privacy-first/on-device data model, hosts the legal pages the Play
Store listing requires (Privacy Policy, Terms), and gives users a support
channel. The site must be static and free to host, so it deploys to GitHub
Pages directly from this repo.

## What Changes

- Replace the default Vite/Vue scaffold in this repo with a real marketing
  site: Tailwind CSS, Vue Router, Heroicons + @lucide/vue, Inter + Manrope
  fonts, and a dark-by-default design system built on the MFlow palette.
- Add four routed pages: landing (`/`), Privacy Policy (`/privacy`), Support
  (`/support`), Terms of Service (`/terms`), plus a catch-all 404.
- Add a componentized landing page: sticky glass navbar, animated hero with
  gradient blobs / floating cards / phone mockup, an 11-item feature grid, a
  7-item "Why MFlow" grid, and a shared footer.
- Add scroll-driven reveal animations, hover/press micro-interactions, and
  route-level page transitions using CSS transitions/Vue `<Transition>` only
  (no animation library dependency).
- Bring in the official brand assets (`logo-light.png`, `logo-dark.png`,
  `icon.png` supplied on disk) as the app's logo, favicon, and OG image.
- Add per-page SEO metadata (title/description/OG/canonical), `robots.txt`,
  and semantic landmarks for accessibility.
- Add a GitHub Actions workflow (or documented `gh-pages` script) and a Vite
  `base` configured for Project Pages, with a README documenting the deploy
  steps.
- **BREAKING**: removes the default scaffold's Pinia dependency, the sample
  `HelloWorld`/counter store, and any placeholder routes — none of that
  ships in the final site.

## Capabilities

### New Capabilities
- `marketing-site`: the routed multi-page marketing website itself — its
  pages, navigation, and content requirements (hero, features, why-mflow,
  footer, privacy/support/terms/404 content).
- `brand-design-system`: the visual language — color tokens, typography,
  dark theme, animation/motion primitives, and brand asset usage rules that
  every page must follow.
- `site-deployment`: build configuration and CI required to ship the site to
  GitHub Pages (Vite base path, build output, deploy workflow).

### Modified Capabilities
_None — this is a greenfield build; the existing scaffold has no
previously-specified capabilities._

## Impact

- **Affected code**: entire `src/` tree (App.vue, main.ts, router, all
  components/pages/layouts/composables/types), `public/`, root configs
  (`package.json`, `vite.config.ts`, new `tailwind.config.ts`, `tsconfig*`,
  `index.html`).
- **Dependencies added**: `tailwindcss` (+ `postcss`, `autoprefixer`),
  `vue-router` (kept), `@heroicons/vue`, `@lucide/vue`.
- **Dependencies removed**: `pinia`.
- **Systems**: GitHub Pages hosting (new), GitHub Actions (new workflow for
  build+deploy).
- **No backend/API impact** — fully static site, no server-side code.
