export interface SeoMetaOptions {
  title: string
  description: string
  path?: string
}

const SITE_NAME = 'MFlow'
const SITE_URL = 'https://bhanuchander00001.github.io/mflow'
const OG_IMAGE = `${SITE_URL}/og-image.png`

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets per-page title/description/canonical/Open Graph tags. Call once per
 * page in <script setup>; no reactivity needed since routes fully remount.
 */
export function useSeoMeta({ title, description, path = '/' }: SeoMetaOptions): void {
  const fullTitle = path === '/' ? title : `${title} — ${SITE_NAME}`
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`

  document.title = fullTitle
  upsertMeta('name', 'description', description)
  upsertLink('canonical', canonical)

  upsertMeta('property', 'og:title', fullTitle)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:image', OG_IMAGE)

  upsertMeta('name', 'twitter:title', fullTitle)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', OG_IMAGE)
}
