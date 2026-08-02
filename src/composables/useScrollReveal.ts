import { onMounted, onUnmounted, ref, type Ref } from 'vue'

/**
 * Adds the `.reveal` base class to the returned element ref, then flips it to
 * `.reveal.is-visible` the first time it crosses into the viewport. Backed by
 * IntersectionObserver so it costs nothing on scroll frames; unobserves after
 * the first reveal since these are one-shot entrance animations.
 */
export function useScrollReveal(): { target: Ref<HTMLElement | null> } {
  const target = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = target.value
    if (!el) return

    el.classList.add('reveal')

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target }
}
