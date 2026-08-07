## 1. Tooling & Config

- [x] 1.1 Rewrite `package.json`: vue `^3.5.40`, vue-router `^5.2.0`, vite
      `^8.2.0`, add tailwindcss `^4.3.3` + `@tailwindcss/vite`,
      `@heroicons/vue`, `@lucide/vue`; remove `pinia` and the `rc`
      overrides block
- [x] 1.2 Update `vite.config.ts`: add `@tailwindcss/vite` plugin, set
      `base` from `VITE_BASE_PATH` env var (default `/`)
- [x] 1.3 Update `tsconfig.app.json`/`tsconfig.json` for strict mode if not
      already strict; confirm path aliases (`@/*` -> `src/*`)
- [x] 1.4 Create `tailwind.config.ts` (darkMode, content globs, plugin slot)
- [x] 1.5 Update `index.html`: fonts (Inter, Manrope), favicon links, root
      `<div id="app">`, base meta tags
- [x] 1.6 Create `public/robots.txt` allowing full crawl + sitemap ref

## 2. Brand Assets

- [x] 2.1 Copy `logo-light.png`, `logo-dark.png`, `icon.png` from Downloads
      into `src/assets/brand/`
- [x] 2.2 Generate `public/favicon.ico`, `public/apple-touch-icon.png`, and
      `public/og-image.png` (1200x630) from `icon.png`
- [x] 2.3 Copy a working logo file to `public/logo.svg`-equivalent
      (`public/logo.png`) for non-component references (e.g. OG image, README)

## 3. Types & Composables

- [x] 3.1 `src/types/feature.ts` (Feature, WhyReason interfaces)
- [x] 3.2 `src/composables/useScrollReveal.ts` (IntersectionObserver-based
      reveal directive/composable)
- [x] 3.3 `src/composables/useSeoMeta.ts` (sets title/meta description/OG
      tags per page)

## 4. Global Styles & Layout

- [x] 4.1 `src/style.css`: `@import "tailwindcss"`, `@config`, `@theme`
      color tokens, font-face/Google Fonts import, base resets,
      glassmorphism/gradient-blob/ripple utility classes
- [x] 4.2 `src/layouts/DefaultLayout.vue` (Navbar + `<router-view>` with
      transition + Footer)

## 5. Shared Components

- [x] 5.1 `src/components/Logo.vue` (variant prop: light/dark)
- [x] 5.2 `src/components/AppButton.vue` (primary/secondary/ghost, ripple
      on click)
- [x] 5.3 `src/components/NavBar.vue` (sticky, glass, mobile menu)
- [x] 5.4 `src/components/AppFooter.vue`
- [x] 5.5 `src/components/GradientBlob.vue`
- [x] 5.6 `src/components/PhoneMockup.vue`
- [x] 5.7 `src/components/FloatingCard.vue`
- [x] 5.8 `src/components/FeatureCard.vue`
- [x] 5.9 `src/components/WhyCard.vue`
- [x] 5.10 `src/components/SectionHeading.vue`
- [x] 5.11 `src/components/RevealSection.vue` (wraps `useScrollReveal`)

## 6. Pages

- [x] 6.1 `src/pages/HomePage.vue`: Hero, feature grid (12 features), Why
      MFlow grid (7 reasons), final CTA section
- [x] 6.2 `src/pages/PrivacyPage.vue`: all required sections + required
      statements (on-device SMS, no upload, optional Gmail, no ads/analytics/
      tracking/selling, editable auto-approved transactions)
- [x] 6.3 `src/pages/SupportPage.vue`: FAQ (permissions, backup, restore,
      SMS detection, Gmail sync) + contact email
- [x] 6.4 `src/pages/TermsPage.vue`: disclaimer, license, user
      responsibilities, no warranty, limitation of liability
- [x] 6.5 `src/pages/NotFoundPage.vue`: 404 message + link home

## 7. Routing & App Shell

- [x] 7.1 `src/router/index.ts`: routes for `/`, `/privacy`, `/support`,
      `/terms`, catch-all -> NotFoundPage, scroll behavior
- [x] 7.2 `src/App.vue`: mounts `DefaultLayout`
- [x] 7.3 `src/main.ts`: create app, install router, decode
      `public/404.html` redirect query param via `router.replace` on boot
- [x] 7.4 Remove leftover scaffold files (`src/stores/counter.ts`, any
      sample components)

## 8. GitHub Pages Deployment

- [x] 8.1 `public/404.html` with the SPA redirect-encode script
- [x] 8.2 `.github/workflows/deploy.yml`: build on push to `main`, set
      `VITE_BASE_PATH=/mflow/`, upload + deploy via
      `actions/upload-pages-artifact` + `actions/deploy-pages`
- [x] 8.3 Update `README.md` with local dev, build, and GitHub Pages
      deployment instructions (including one-time repo Settings step to
      enable Pages "GitHub Actions" source)

## 9. Verification

- [x] 9.1 `npm install`
- [x] 9.2 `npm run build` succeeds with no TypeScript errors
- [x] 9.3 `npm run dev`; manually check all 5 routes, responsive breakpoints
      (mobile/tablet/desktop), navbar/footer links, and scroll/hover
      animations
- [x] 9.4 Confirm favicon/OG image/logo render correctly in the browser tab
      and page markup
