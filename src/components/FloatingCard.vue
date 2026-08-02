<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon: Component
  label: string
  value: string
  iconClass?: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  iconClass: 'text-accent',
  delay: 0,
})
</script>

<template>
  <div
    class="glass animate-float rounded-2xl px-4 py-3 shadow-xl shadow-black/40"
    :style="{ animationDelay: `${delay}s` }"
  >
    <div class="flex items-center gap-3">
      <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
        <component :is="icon" class="h-4 w-4" :class="iconClass" />
      </span>
      <div class="leading-tight">
        <p class="text-[11px] uppercase tracking-wide text-slate-400">{{ label }}</p>
        <p class="font-display text-sm font-bold text-white">{{ value }}</p>
      </div>
    </div>
  </div>
</template>
