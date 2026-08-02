## Context

The repo currently holds a fresh `npm create vue@latest` scaffold: Vue on the
`rc` (3.6 pre-release/vapor) dist-tag, `vite@^8.1.5`, `vue-router@^5.2.0`,
`pinia@^4.0.2`, no Tailwind, a single `HelloWorld`-less `App.vue`, and a
counter store. Target repo is `bhanuchander00001/mflow` (public origin
already configured), so the GitHub Pages project URL will be
`https://bhanuchander00001.github.io/mflow/`. See `proposal.md` for why this
site is being built; this document covers how.

## Goals / Non-Goals

**Goals:**
- Land on dependency versions that are current *and* stable (no `-rc`/beta
  tags) so the build is reproducible and safe to ship.
- Keep the file/folder layout the user specified exactly
  (`layouts/`, `pages/`, `components/`, `composables/`, `types/`,
  `tailwind.config.ts`, etc.).
- Make GitHub Pages deployment fully automated via GitHub Actions.
- Keep the animation system dependency-free (CSS + Vue `<Transition>` only).

**Non-Goals:**
- No CMS/headless content integration — all copy is static in `.vue` files.
- No i18n/multi-language support in this pass.
- No light-theme toggle — dark is the only theme.
- No backend, forms-with-server, or analytics integration (site has no
  tracking by design, matching the app's own privacy stance).

## Decisions

**Vue: pin to `^3.5.40` (stable), not the `rc` dist-tag the scaffold shipped with.**
A public marketing site has no need for Vue 3.6/vapor-mode pre-release
features. `vue-router@5.2.0`'s peer range (`^3.5.34 || ^4.0.0`) is satisfied
by 3.5.40, so we drop the scaffold's `overrides` block that pinned every
`@vue/*` package to `rc` — it existed only to support the vapor RC and adds
risk for zero benefit here.

**Keep `vue-router@^5.2.0` and `vite@^8.2.0`** — both already current stable
majors compatible with Vue 3.5, so no downgrade needed there. Router uses
`createWebHistory(import.meta.env.BASE_URL)` so the same build works locally
(`/`) and on Pages (`/mflow/`) via Vite's `base` config.

**Drop Pinia.** Nothing on a static marketing site needs shared reactive
store state; `ref`/`reactive` in composables is sufficient (e.g. a
`useScrollReveal` composable using `IntersectionObserver`). Removing it
matches the proposal's explicit dependency removal and avoids an unused
dependency in the Lighthouse bundle-size budget.

**Tailwind CSS v4 (`^4.3.3`) via the official `@tailwindcss/vite` plugin**,
not v3. v4 is the current stable major (v3 is legacy at this point), is
faster (Rust-based engine, no PostCSS pipeline required), and defines theme
tokens directly in CSS via `@theme`. To satisfy the requested project
structure, a `tailwind.config.ts` is still included and wired in via
`@config "../tailwind.config.ts"` inside `style.css` — it carries
`darkMode` and any plugin registration, while color tokens live in
`@theme` in `style.css` (single source of truth, easy to audit against the
brand palette). Alternative considered: Tailwind v3 with a full JS config —
rejected as building on a legacy major for a new production project.

**Icons: `@heroicons/vue` (outline set) for navigation/UI chrome, `@lucide/vue`
for feature-card glyphs.** Both were explicitly required; splitting usage
this way (nav/system icons vs. content icons) avoids importing the same
concept from two libraries in the same view and gives the feature grid
access to Lucide's larger finance-oriented icon set (e.g. `Landmark`,
`ScanLine`, `PiggyBank`).

**Brand assets copied into the repo, not referenced from `Downloads`.**
`logo-light.png`/`logo-dark.png`/`icon.png` are copied into `src/assets/brand/`
(component-imported logo files, so Vite hashes/optimizes them) and derived
copies are placed in `public/` (`favicon.ico`-equivalent `logo.svg`
replaced by a PNG-based favicon since the sources are raster, plus
`og-image.png` sized 1200×630 for social previews). A `<Logo>` component
picks the correct variant via a `variant: 'light' | 'dark'` prop rather than
CSS `prefers-color-scheme`, since the site itself is always dark-themed —
only the *surface* the logo sits on varies (e.g. footer's dark background
vs. a hypothetical light card).

**Routing mode: HTML5 history (`createWebHistory`) + GitHub Pages SPA
redirect trick**, not hash mode. Clean URLs (`/privacy`, not `/#/privacy`)
matter for SEO and for the URLs already implied by the spec/nav. GitHub
Pages has no server-side rewrite, so we ship a `public/404.html` that
encodes the requested path into a query string and redirects to
`index.html`, which decodes it and calls `router.replace()` on boot (the
well-known `rafgraph/spa-github-pages` pattern). Alternative considered:
hash-mode routing — rejected, uglier URLs and the spec calls for a real
`/privacy` path to work on direct load/refresh.

**Deployment: GitHub Actions using the official `actions/configure-pages`,
`actions/upload-pages-artifact`, `actions/deploy-pages` actions**, triggered
on push to `main`, rather than a `gh-pages` npm package pushing to a
`gh-pages` branch. This needs no deploy token (uses the built-in
`GITHUB_TOKEN` with `pages: write` permission) and is GitHub's currently
recommended approach. `vite.config.ts` reads `base` from a
`VITE_BASE_PATH` env var (defaulting to `/` for local dev) so CI can set it
to `/mflow/` without hardcoding the repo name into source.

**SEO metadata via a tiny `useSeoMeta` composable**, not `vue-meta`/`unhead`.
Each page calls it once in `<script setup>` with title/description/OG
fields; the composable imperatively sets `document.title` and
upserts `<meta>` tags. A dependency-free ~30-line composable is enough for
four static routes and avoids pulling in a full head-management library.

## Risks / Trade-offs

- **Raster-only brand source assets** (PNG, not SVG) → favicon/app-icon
  generation is a manual resize step (multiple PNG sizes) rather than one
  scalable SVG. Mitigation: generate the standard sizes (32/180/512) once
  during this build; document in README how to regenerate if the source
  assets change.
- **`public/404.html` redirect trick adds a brief redirect hop** on a cold
  deep-link load → mitigate by keeping the redirect script tiny/inline (no
  extra network request) so the hop is sub-frame and imperceptible.
- **Tailwind v4's automatic content detection** could theoretically miss
  dynamically constructed class names → mitigate by never string-concatenating
  Tailwind classes (always full literal class strings), which is standard
  Tailwind practice anyway.
- **No visual design tool output (Figma etc.) to pixel-match** → mitigate by
  treating the written specs (spacing rhythm, palette, motion primitives) as
  the acceptance bar, and doing a manual responsive pass (desktop/tablet/
  mobile) before calling the build done.

## Migration Plan

1. Rewrite `package.json` dependencies to the pinned stable set above; remove
   `pinia` and the `rc` overrides block.
2. Replace scaffold `src/` contents entirely (components, router, App.vue,
   main.ts) — no need to preserve old code, it's all placeholder.
3. Add Tailwind v4 wiring (`@tailwindcss/vite` in `vite.config.ts`,
   `@import "tailwindcss"` + `@theme` + `@config` in `style.css`,
   `tailwind.config.ts`).
4. Copy/process brand assets into `src/assets/brand/` and `public/`.
5. Build shared layout/components, then the four pages + 404, then router.
6. Add `public/404.html` redirect script + matching boot-time decode in
   `main.ts`.
7. Add the GitHub Actions Pages workflow and set `VITE_BASE_PATH`.
8. Update README with deployment instructions.
9. `npm install`, `npm run build` locally to confirm a clean production
   build before considering the change done; no rollback concerns since
   this repo has no prior deployed version of the site.
