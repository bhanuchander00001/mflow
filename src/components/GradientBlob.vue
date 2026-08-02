<script setup lang="ts">
interface Props {
  color?: 'primary' | 'secondary' | 'accent'
  size?: number
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 420,
  delay: 0,
})

const colorClass = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
}[props.color]
</script>

<template>
  <div
    class="pointer-events-none absolute rounded-full opacity-30 blur-3xl animate-blob"
    :class="colorClass"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
    }"
    aria-hidden="true"
  />
</template>
