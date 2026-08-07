<script setup lang="ts">
import type { Feature } from '@/types/feature'

defineProps<{ feature: Feature }>()
</script>

<template>
  <div
    class="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
  >
    <span
      class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-colors group-hover:text-secondary"
    >
      <component :is="feature.icon" class="h-5 w-5" />
    </span>
    <h3 class="mt-4 font-display text-lg font-bold text-white">{{ feature.title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ feature.description }}</p>
  </div>
</template>
