<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { useSeoMeta } from '@/composables/useSeoMeta'
import SectionHeading from '@/components/SectionHeading.vue'
import RevealSection from '@/components/RevealSection.vue'
import AppButton from '@/components/AppButton.vue'
import type { FaqItem } from '@/types/feature'

useSeoMeta({
  title: 'Support',
  description:
    'Answers to common MFlow questions: permissions, backup and restore, SMS detection, and Gmail sync — plus how to reach us directly.',
  path: '/support',
})

const contactEmail = 'support.mflow@gmail.com'

const faqs: FaqItem[] = [
  {
    question: 'Why does MFlow ask for SMS permission?',
    answer:
      'MFlow reads transaction SMS from your bank and card issuers to automatically detect and log transactions. This parsing happens entirely on your device — raw SMS content is never uploaded anywhere.',
  },
  {
    question: 'What happens if I deny a permission?',
    answer:
      'MFlow degrades gracefully. Without SMS permission you can still track everything manually. Without Gmail access, Gmail import simply stays off — every permission is optional except what a specific feature you choose to use requires.',
  },
  {
    question: 'Does MFlow support manual transactions?',
    answer:
      'Yes. A "+" button is available on both the Dashboard and the Transactions section to create a manual transaction at any time. This helps if a bank doesn\'t send a transaction SMS or email, or if you\'d rather not grant SMS or Gmail permission at all — MFlow works fully on manual entry alone.',
  },
  {
    question: 'How do I back up my data?',
    answer:
      'Open Settings → Backup & Restore → Create Backup. MFlow generates an encrypted backup file that you save wherever you like (device storage, an SD card, or a cloud drive of your choice) — MFlow itself never uploads it automatically.',
  },
  {
    question: 'How do I restore from a backup?',
    answer:
      'On a new device or after a reinstall, open Settings → Backup & Restore → Restore Backup, then select your saved backup file. Your transactions, budgets, and categories are restored exactly as they were.',
  },
  {
    question: 'How does automatic SMS detection work?',
    answer:
      'MFlow watches for incoming SMS from recognized bank and card-issuer sender IDs, parses the amount, merchant, and account on-device, and creates a categorized transaction in your Approval Queue — which you can review and edit at any time.',
  },
  {
    question: "What happens if I don't approve a transaction?",
    answer:
      'You can turn on auto-approve in Settings so detected transactions are approved by themselves after a time period you choose. If you leave auto-approve off, nothing is applied to your budgets or reports automatically — the transaction simply sits in your Pending Transactions list until you review and approve it yourself.',
  },
  {
    question: 'How does Gmail sync work?',
    answer:
      'If enabled, MFlow periodically checks for transaction-related emails (like payment receipts) and extracts transaction details from them, the same way it does with SMS. Gmail sync is entirely optional and can be disabled at any time in Settings.',
  },
]

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="px-4 py-16 sm:px-6 lg:px-8">
    <RevealSection>
      <SectionHeading
        eyebrow="Support"
        title="How can we help?"
        subtitle="Answers to the questions we hear most. Can't find what you need? Email us directly."
      />
    </RevealSection>

    <RevealSection :delay="100" class="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      <div v-for="(faq, index) in faqs" :key="faq.question">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          :aria-expanded="openIndex === index"
          @click="toggle(index)"
        >
          <span class="font-display font-semibold text-white">{{ faq.question }}</span>
          <ChevronDownIcon
            class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200"
            :class="{ 'rotate-180': openIndex === index }"
          />
        </button>
        <div v-show="openIndex === index" class="px-6 pb-5">
          <p class="leading-relaxed text-slate-400">{{ faq.answer }}</p>
        </div>
      </div>
    </RevealSection>

    <RevealSection :delay="200" class="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-card to-background p-8 text-center">
      <EnvelopeIcon class="mx-auto h-8 w-8 text-secondary" />
      <h2 class="mt-4 font-display text-xl font-bold text-white">Still need help?</h2>
      <p class="mt-2 text-slate-400">Reach out and a real person will get back to you.</p>
      <div class="mt-6 flex justify-center">
        <AppButton as="a" :href="`mailto:${contactEmail}`">{{ contactEmail }}</AppButton>
      </div>
    </RevealSection>
  </div>
</template>
