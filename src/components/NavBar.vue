<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PlayCircleIcon } from '@heroicons/vue/24/solid'
import Logo from '@/components/Logo.vue'
import AppButton from '@/components/AppButton.vue'

const PLAY_STORE_URL = '#'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Features', to: { path: '/', hash: '#features' } },
  { label: 'Why MFlow', to: { path: '/', hash: '#why-mflow' } },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Support', to: '/support' },
]

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <nav class="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6" aria-label="Primary">
        <router-link to="/" class="shrink-0" aria-label="MFlow home">
          <Logo />
        </router-link>

        <div class="hidden items-center gap-1 md:flex">
          <router-link
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            {{ link.label }}
          </router-link>
        </div>

        <div class="hidden md:block">
          <AppButton as="a" :href="PLAY_STORE_URL" target="_blank">
            <template #icon-left>
              <PlayCircleIcon class="h-5 w-5" />
            </template>
            Download on Google Play
          </AppButton>
        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </nav>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          <router-link
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            {{ link.label }}
          </router-link>
          <AppButton as="a" :href="PLAY_STORE_URL" target="_blank" class="mt-1 w-full">
            <template #icon-left>
              <PlayCircleIcon class="h-5 w-5" />
            </template>
            Download on Google Play
          </AppButton>
        </div>
      </Transition>
    </div>
  </header>
</template>
