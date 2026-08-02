import type { Config } from 'tailwindcss'

// Tailwind v4 reads theme tokens from `@theme` in src/style.css; this file only
// pins the content scan paths explicitly (Vite runs from repo root, so v4's
// automatic detection already covers this, but being explicit keeps builds
// deterministic across environments).
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
} satisfies Config
