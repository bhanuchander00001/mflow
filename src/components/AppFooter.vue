<script setup lang="ts">
import Logo from '@/components/Logo.vue'

const GITHUB_URL = 'https://github.com/mflowapp/mflow'
const year = new Date().getFullYear()

const linkGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: { path: '/', hash: '#features' } },
      { label: 'Why MFlow', to: { path: '/', hash: '#why-mflow' } },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Support', to: '/support' },
      { label: 'GitHub', to: GITHUB_URL, external: true },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-border bg-card/40">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-10 sm:grid-cols-4">
        <div class="col-span-2">
          <Logo />
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Private, offline-first, AI-assisted personal finance for Android.
            Your data stays on your device.
          </p>
        </div>

        <div v-for="group in linkGroups" :key="group.title">
          <h3 class="font-display text-sm font-semibold text-white">{{ group.title }}</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in group.links" :key="link.label">
              <a
                v-if="'external' in link && link.external"
                :href="link.to as string"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {{ link.label }}
              </a>
              <router-link
                v-else
                :to="link.to"
                class="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-border pt-8 text-sm text-slate-500">
        <p>&copy; {{ year }} MFlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
