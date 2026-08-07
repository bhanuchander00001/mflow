const DEFAULT_DURATION = 900
const DEFAULT_OFFSET = 96

// Tracks the in-flight animation so a new scroll (or the user grabbing the
// wheel/trackpad mid-animation) can cancel it instead of fighting it every
// frame — without this, a manual scroll during the animation gets yanked
// back toward the target on the next rAF tick.
let activeFrame: number | null = null
let cancelOnUserScroll: (() => void) | null = null

function stopActiveScroll() {
  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame)
    activeFrame = null
  }
  if (cancelOnUserScroll) {
    window.removeEventListener('wheel', cancelOnUserScroll)
    window.removeEventListener('touchstart', cancelOnUserScroll)
    cancelOnUserScroll = null
  }
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Animates the page to `target`'s position with a slower, decelerating
 * scroll than the browser's native `scroll-behavior: smooth` allows,
 * so every in-page anchor (nav links, footer links, hero CTA) moves at the
 * same speed regardless of how the navigation was triggered. Yields
 * immediately to a manual scroll/touch input or a newer call. */
export function scrollToElement(
  target: HTMLElement,
  options: { offset?: number; duration?: number } = {},
): void {
  stopActiveScroll()

  const { offset = DEFAULT_OFFSET, duration = DEFAULT_DURATION } = options
  const startY = window.scrollY
  const targetY = target.getBoundingClientRect().top + startY - offset

  if (prefersReducedMotion()) {
    window.scrollTo({ top: targetY, behavior: 'auto' })
    return
  }

  const distance = targetY - startY
  const startTime = performance.now()

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    // `behavior: 'auto'` only applies instantly as long as no CSS
    // `scroll-behavior: smooth` is set on the document — 'auto' actually
    // means "defer to that CSS property", so re-adding it globally would
    // make the browser smooth each of these incremental hops on top of
    // this loop's own easing, producing a laggy double-animation.
    window.scrollTo({ top: startY + distance * easeOutCubic(progress), behavior: 'auto' })
    if (progress < 1) {
      activeFrame = requestAnimationFrame(step)
    } else {
      stopActiveScroll()
    }
  }

  cancelOnUserScroll = stopActiveScroll
  window.addEventListener('wheel', cancelOnUserScroll, { passive: true, once: true })
  window.addEventListener('touchstart', cancelOnUserScroll, { passive: true, once: true })

  activeFrame = requestAnimationFrame(step)
}

async function waitForElement(selector: string, retries = 20, interval = 50): Promise<HTMLElement | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const el = document.querySelector<HTMLElement>(selector)
    if (el) return el
    await new Promise((resolve) => setTimeout(resolve, interval))
  }
  return null
}

/** Scrolls to a `#hash` target, waiting briefly for it to mount first (needed
 * when navigating from another route into a lazy-loaded page). */
export async function scrollToHash(hash: string, options?: { offset?: number; duration?: number }): Promise<void> {
  const el = await waitForElement(hash)
  if (el) scrollToElement(el, options)
}
