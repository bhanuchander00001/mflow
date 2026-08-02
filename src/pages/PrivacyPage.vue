<script setup lang="ts">
import { useSeoMeta } from '@/composables/useSeoMeta'
import RevealSection from '@/components/RevealSection.vue'

useSeoMeta({
  title: 'Privacy Policy',
  description:
    'How MFlow handles SMS, Gmail, and manual transaction data — processed entirely on-device, never uploaded, never sold, never used for ads or tracking.',
  path: '/privacy',
})

const lastUpdated = '2 August 2026'
const contactEmail = 'support.mflow@gmail.com'
</script>

<template>
  <div class="px-4 py-16 sm:px-6 lg:px-8">
    <RevealSection class="mx-auto max-w-3xl">
      <p class="font-display text-sm font-semibold uppercase tracking-widest text-secondary">
        Legal
      </p>
      <h1 class="mt-3 font-display text-4xl font-extrabold text-white">Privacy Policy</h1>
      <p class="mt-3 text-sm text-slate-500">Last updated: {{ lastUpdated }}</p>

      <div class="prose-legal mt-10 space-y-10 text-slate-300">
        <section aria-labelledby="introduction">
          <h2 id="introduction" class="font-display text-xl font-bold text-white">Introduction</h2>
          <p class="mt-3 leading-relaxed">
            MFlow ("we", "our", "the app") is a personal finance manager for Android built around a
            simple principle: your financial data belongs to you. This Privacy Policy explains what
            information MFlow accesses, why it accesses it, and — most importantly — what MFlow does
            <strong class="text-white">not</strong> do with it.
          </p>
        </section>

        <section aria-labelledby="info-collect">
          <h2 id="info-collect" class="font-display text-xl font-bold text-white">
            Information We Collect
          </h2>

          <h3 class="mt-5 font-display text-base font-semibold text-white">SMS Permission</h3>
          <p class="mt-2 leading-relaxed">
            If you grant SMS permission, MFlow reads transaction-related SMS messages (from banks
            and card issuers) to detect and log transactions automatically.
            <strong class="text-white">SMS processing happens entirely on your device.</strong>
            Message content is parsed locally to extract amount, merchant, and account details — the
            raw SMS text is never uploaded to any server, ever.
          </p>

          <h3 class="mt-5 font-display text-base font-semibold text-white">Gmail Permission</h3>
          <p class="mt-2 leading-relaxed">
            Gmail access is <strong class="text-white">entirely optional</strong>. If you choose to
            connect Gmail, MFlow scans transaction-related emails (e.g. payment receipts) to fill in
            gaps SMS parsing can't catch. You can decline this permission and use MFlow fully without it.
          </p>

          <h3 class="mt-5 font-display text-base font-semibold text-white">Manual Transactions</h3>
          <p class="mt-2 leading-relaxed">
            Any transaction you enter manually is stored using the same on-device, encrypted storage
            as SMS- and Gmail-sourced transactions.
          </p>
        </section>

        <section aria-labelledby="ai-processing">
          <h2 id="ai-processing" class="font-display text-xl font-bold text-white">AI Processing</h2>
          <p class="mt-3 leading-relaxed">
            Categorization and merchant-learning models run on-device. No transaction content is sent
            to a remote AI service as part of this processing. Transactions that are automatically
            categorized and approved by MFlow's AI
            <strong class="text-white">always remain visible and editable</strong> in your Approval
            Queue — automation never locks you out of correcting a transaction.
          </p>
        </section>

        <section aria-labelledby="data-use">
          <h2 id="data-use" class="font-display text-xl font-bold text-white">How Data Is Used</h2>
          <p class="mt-3 leading-relaxed">
            Data extracted from SMS, Gmail, or manual entry is used exclusively to power the features
            you see in the app: transaction lists, budgets, reports, and analytics. It is never used
            to build an advertising profile, because MFlow shows no advertisements.
          </p>
        </section>

        <section aria-labelledby="offline-storage">
          <h2 id="offline-storage" class="font-display text-xl font-bold text-white">
            Offline Storage
          </h2>
          <p class="mt-3 leading-relaxed">
            Your transactions, budgets, and settings are stored in an encrypted local database on your
            device. MFlow is designed offline-first — the app functions fully without an internet
            connection.
          </p>
        </section>

        <section aria-labelledby="internet-usage">
          <h2 id="internet-usage" class="font-display text-xl font-bold text-white">
            Internet Usage
          </h2>
          <p class="mt-3 leading-relaxed">
            MFlow uses the internet only for optional features you explicitly enable — such as Gmail
            import or future cloud backup/sync. Core tracking and budgeting features require no
            network access at all.
          </p>
        </section>

        <section aria-labelledby="data-sharing">
          <h2 id="data-sharing" class="font-display text-xl font-bold text-white">Data Sharing</h2>
          <p class="mt-3 leading-relaxed">
            <strong class="text-white">We do not sell user data.</strong> MFlow contains no
            advertising SDKs, no analytics SDKs, and no third-party trackers. We do not share your
            financial data with advertisers, data brokers, or any other third party.
          </p>
        </section>

        <section aria-labelledby="security">
          <h2 id="security" class="font-display text-xl font-bold text-white">Security</h2>
          <p class="mt-3 leading-relaxed">
            Local data is encrypted at rest. Any optional network calls (e.g. Gmail API, future sync)
            use industry-standard TLS encryption in transit.
          </p>
        </section>

        <section aria-labelledby="backup-restore">
          <h2 id="backup-restore" class="font-display text-xl font-bold text-white">
            Backup &amp; Restore
          </h2>
          <p class="mt-3 leading-relaxed">
            MFlow supports creating an encrypted backup file that you control and store yourself, and
            restoring from it on any device running MFlow. Backups are never uploaded automatically.
          </p>
        </section>

        <section aria-labelledby="permissions">
          <h2 id="permissions" class="font-display text-xl font-bold text-white">Permissions</h2>
          <p class="mt-3 leading-relaxed">
            MFlow requests only the Android permissions required for the features you use: SMS
            (transaction detection), storage (backups), and network (optional Gmail import / sync).
            Every permission can be revoked from Android Settings at any time; core app functionality
            degrades gracefully rather than breaking.
          </p>
        </section>

        <section aria-labelledby="children-privacy">
          <h2 id="children-privacy" class="font-display text-xl font-bold text-white">
            Children's Privacy
          </h2>
          <p class="mt-3 leading-relaxed">
            MFlow is not directed at children under 13, and we do not knowingly collect information
            from children under 13.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" class="font-display text-xl font-bold text-white">Changes</h2>
          <p class="mt-3 leading-relaxed">
            We may update this Privacy Policy from time to time. Material changes will be reflected by
            updating the "Last updated" date above.
          </p>
        </section>

        <section aria-labelledby="google-api">
          <h2 id="google-api" class="font-display text-xl font-bold text-white">
            Google API Limited Use Statement
          </h2>
          <p class="mt-3 leading-relaxed">
            MFlow's use and transfer of information received from Google APIs adheres to the
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary underline underline-offset-2 hover:text-secondary"
              >Google API Services User Data Policy</a
            >, including the Limited Use requirements.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" class="font-display text-xl font-bold text-white">Contact</h2>
          <p class="mt-3 leading-relaxed">
            Questions about this policy? Email
            <a
              :href="`mailto:${contactEmail}`"
              class="text-primary underline underline-offset-2 hover:text-secondary"
              >{{ contactEmail }}</a
            >.
          </p>
        </section>
      </div>
    </RevealSection>
  </div>
</template>
