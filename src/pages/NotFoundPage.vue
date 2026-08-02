<script setup lang="ts">
import { useSeoMeta } from '@/composables/useSeoMeta'
import AppButton from '@/components/AppButton.vue'
import GradientBlob from '@/components/GradientBlob.vue'

useSeoMeta({
  title: 'Page Not Found',
  description: 'The page you were looking for does not exist.',
  path: '/404',
})
</script>

<template>
  <div class="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
    <GradientBlob color="primary" :size="420" class="-left-32 top-0" />
    <GradientBlob color="secondary" :size="360" class="-right-24 bottom-0" :delay="3" />

    <p class="relative font-display text-7xl font-extrabold text-white sm:text-8xl">404</p>
    <h1 class="relative mt-4 font-display text-2xl font-bold text-white">Page not found</h1>
    <p class="relative mt-3 max-w-md text-slate-400">
      The page you're looking for doesn't exist or may have moved.
    </p>
    <div class="relative mt-8">
      <AppButton as="router-link" to="/">Back to home</AppButton>
    </div>
  </div>
</template>
