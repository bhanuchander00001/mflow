<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'center',
})
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p
      v-if="eyebrow"
      class="font-display text-sm font-semibold uppercase tracking-widest text-secondary"
    >
      {{ eyebrow }}
    </p>
    <h2 class="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
