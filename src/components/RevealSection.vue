<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

withDefaults(defineProps<{ delay?: number; as?: string }>(), {
  delay: 0,
  as: 'div',
})

const { target } = useScrollReveal()
</script>

<template>
  <component :is="as" ref="target" :style="{ transitionDelay: `${delay}ms` }">
    <slot />
  </component>
</template>
