<script setup lang="ts">
import type { WhyReason } from '@/types/feature'

defineProps<{ reason: WhyReason }>()
</script>

<template>
  <div
    class="flex items-start gap-4 rounded-2xl border border-border bg-gradient-to-b from-card to-card/40 p-5 transition-colors duration-300 hover:border-accent/50"
  >
    <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
      <component :is="reason.icon" class="h-5 w-5" />
    </span>
    <div>
      <h3 class="font-display text-base font-bold text-white">{{ reason.title }}</h3>
      <p class="mt-1 text-sm leading-relaxed text-slate-400">{{ reason.description }}</p>
    </div>
  </div>
</template>
