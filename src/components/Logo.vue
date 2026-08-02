<script setup lang="ts">
// Use the pre-resized 128px copy, not the ~1MB source-of-truth icon.png,
// since this only ever renders at navbar/footer icon sizes.
import iconUrl from '@/assets/brand/icon-128.png'

interface Props {
  /** Text color to use for the "MFlow" wordmark: 'light' for dark surfaces, 'dark' for light surfaces. */
  variant?: 'light' | 'dark'
  /** Pixel size of the icon mark. */
  size?: number
  showWordmark?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'light',
  size: 36,
  showWordmark: true,
})
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <img
      :src="iconUrl"
      alt="MFlow logo"
      :width="size"
      :height="size"
      class="rounded-[22%]"
      loading="eager"
      decoding="async"
    />
    <span
      v-if="showWordmark"
      class="font-display text-lg font-bold tracking-tight"
      :class="variant === 'light' ? 'text-white' : 'text-slate-900'"
    >
      MFlow
    </span>
  </span>
</template>
