<script setup lang="ts">
import {
  ScanLine,
  Sparkles,
  ShieldCheck,
  WifiOff,
  PiggyBank,
  FileBarChart2,
  BarChart3,
  Mail,
  RefreshCcw,
  Repeat,
  Store,
  ListChecks,
  Lock,
  Ban,
  EyeOff,
  Brain,
  Landmark,
  Cloud,
  DoorOpen,
} from '@lucide/vue'
import { PlayCircleIcon } from '@heroicons/vue/24/solid'
import { useSeoMeta } from '@/composables/useSeoMeta'
import { scrollToElement } from '@/composables/useSmoothScroll'
import type { Feature, WhyReason } from '@/types/feature'
import AppButton from '@/components/AppButton.vue'
import GradientBlob from '@/components/GradientBlob.vue'
import PhoneMockup from '@/components/PhoneMockup.vue'
import FloatingCard from '@/components/FloatingCard.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import WhyCard from '@/components/WhyCard.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import RevealSection from '@/components/RevealSection.vue'

useSeoMeta({
  title: 'MFlow — Track. Budget. Prosper.',
  description:
    'MFlow is a private, offline-first, AI-assisted personal finance manager for Android. Automatically organize your finances from SMS, Gmail, and manual entries — your data never leaves your device.',
  path: '/',
})

const PLAY_STORE_URL = '#'

function scrollToFeatures(event: MouseEvent) {
  const el = document.querySelector<HTMLElement>('#features')
  if (!el) return
  event.preventDefault()
  scrollToElement(el)
}

const features: Feature[] = [
  {
    icon: ScanLine,
    title: 'Automatic SMS Detection',
    description: 'Bank and card transaction SMS are parsed the instant they arrive — no manual entry.',
  },
  {
    icon: Sparkles,
    title: 'AI Assisted Categorization',
    description: 'On-device intelligence sorts every transaction into the right category automatically.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy First',
    description: 'Your financial data is yours alone. Nothing is uploaded without your explicit action.',
  },
  {
    icon: WifiOff,
    title: 'Offline First',
    description: 'Track and budget with zero internet connection — MFlow works fully offline.',
  },
  {
    icon: PiggyBank,
    title: 'Budgets',
    description: 'Set monthly budgets per category and get a clear read on where you stand.',
  },
  {
    icon: FileBarChart2,
    title: 'Reports',
    description: 'Clean, exportable reports that summarize your spending and income over any period.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Visual trends and breakdowns that make sense of months of transaction history.',
  },
  {
    icon: Mail,
    title: 'Gmail Import',
    description: 'Optionally import transaction emails from Gmail to fill in gaps SMS can\'t catch.',
  },
  {
    icon: RefreshCcw,
    title: 'Backup & Restore',
    description: 'Encrypted local backups you control, restorable any time you set up a new device.',
  },
  {
    icon: Repeat,
    title: 'Recurring Expenses',
    description: 'Subscriptions and bills are detected and tracked so nothing sneaks past you.',
  },
  {
    icon: Store,
    title: 'Merchant Learning',
    description: 'MFlow remembers how you categorize each merchant and applies it next time.',
  },
  {
    icon: ListChecks,
    title: 'Approval Queue',
    description: 'Review auto-categorized transactions in one place — every entry stays fully editable.',
  },
]

const whyReasons: WhyReason[] = [
  {
    icon: WifiOff,
    title: 'Offline First',
    description: 'Core features work without a single network request.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your SMS and transaction data are processed entirely on your device.',
  },
  {
    icon: Ban,
    title: 'No Ads',
    description: 'A finance app has no business showing you advertisements. MFlow never will.',
  },
  {
    icon: EyeOff,
    title: 'No Tracking',
    description: 'No analytics SDKs, no behavioral tracking, no third-party trackers.',
  },
  {
    icon: Brain,
    title: 'AI Learning',
    description: 'Categorization improves the more you use MFlow — learning from your corrections.',
  },
  {
    icon: Landmark,
    title: 'Indian Banking Support',
    description: 'Built and tuned around the SMS formats of Indian banks and card issuers.',
  },
  {
    icon: Cloud,
    title: 'Future Cloud Sync',
    description: 'Optional, end-to-end encrypted sync across devices is on the roadmap — opt-in only.',
  },
  {
    icon: DoorOpen,
    title: 'No Account Required',
    description: 'Start tracking your money in minutes — no sign-up, no email, no account to create.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <GradientBlob color="primary" :size="480" class="-left-40 -top-20" />
      <GradientBlob color="secondary" :size="420" class="-right-32 top-40" :delay="4" />
      <GradientBlob color="accent" :size="360" class="left-1/3 top-96" :delay="8" />

      <div class="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <RevealSection>
          <p class="font-display text-sm font-semibold uppercase tracking-widest text-secondary">
            Private &middot; Offline-First &middot; AI-Assisted
          </p>
          <h1 class="mt-4 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            MFlow
          </h1>
          <p class="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Track. Budget. Prosper.
          </p>
          <p class="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
            Your private AI-powered money manager. Automatically organize your finances from SMS,
            Gmail and manual entries while keeping your data on your device.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <AppButton as="a" :href="PLAY_STORE_URL" target="_blank" size="lg">
              <template #icon-left>
                <PlayCircleIcon class="h-6 w-6" />
              </template>
              Download on Google Play
            </AppButton>
            <AppButton as="a" href="#features" variant="ghost" size="lg" @click="scrollToFeatures">
              See features
            </AppButton>
          </div>
        </RevealSection>

        <RevealSection :delay="150" class="relative flex justify-center">
          <PhoneMockup />
          <FloatingCard
            :icon="ShieldCheck"
            label="On-device"
            value="100% Private"
            class="absolute -left-4 top-10 hidden sm:block"
          />
          <FloatingCard
            :icon="Sparkles"
            label="Auto-categorized"
            value="Groceries"
            :delay="1.5"
            class="absolute -right-6 bottom-24 hidden sm:block"
          />
        </RevealSection>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <RevealSection>
        <SectionHeading
          eyebrow="Everything, automated"
          title="One app for every part of your money"
          subtitle="From the moment a transaction happens to the report you read at month-end, MFlow handles it."
        />
      </RevealSection>

      <div class="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RevealSection v-for="(feature, i) in features" :key="feature.title" :delay="i * 60">
          <FeatureCard :feature="feature" />
        </RevealSection>
      </div>
    </section>

    <!-- Why MFlow -->
    <section id="why-mflow" class="scroll-mt-28 border-t border-border bg-card/30 px-4 py-24 sm:px-6 lg:px-8">
      <RevealSection>
        <SectionHeading
          eyebrow="Why MFlow"
          title="Built to be trusted with your money"
          subtitle="No shortcuts on privacy — even if that means fewer features than a cloud-first competitor."
        />
      </RevealSection>

      <div class="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
        <RevealSection v-for="(reason, i) in whyReasons" :key="reason.title" :delay="i * 60">
          <WhyCard :reason="reason" />
        </RevealSection>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="px-4 py-24 sm:px-6 lg:px-8">
      <RevealSection
        class="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-background px-8 py-16 text-center"
      >
        <GradientBlob color="primary" :size="300" class="-right-20 -top-20" />
        <GradientBlob color="accent" :size="260" class="-left-16 bottom-0" :delay="3" />
        <h2 class="relative font-display text-3xl font-extrabold text-white sm:text-4xl">
          Take control of your money, privately.
        </h2>
        <p class="relative mx-auto mt-4 max-w-xl text-slate-400">
          Download MFlow and get your finances organized in minutes — no account required to start.
        </p>
        <div class="relative mt-8 flex justify-center">
          <AppButton as="a" :href="PLAY_STORE_URL" target="_blank" size="lg">
            <template #icon-left>
              <PlayCircleIcon class="h-6 w-6" />
            </template>
            Download on Google Play
          </AppButton>
        </div>
      </RevealSection>
    </section>
  </div>
</template>
