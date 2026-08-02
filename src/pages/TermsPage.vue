<script setup lang="ts">
import { useSeoMeta } from '@/composables/useSeoMeta'
import RevealSection from '@/components/RevealSection.vue'

useSeoMeta({
  title: 'Terms of Service',
  description: 'The terms that govern your use of the MFlow Android application.',
  path: '/terms',
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
      <h1 class="mt-3 font-display text-4xl font-extrabold text-white">Terms of Service</h1>
      <p class="mt-3 text-sm text-slate-500">Last updated: {{ lastUpdated }}</p>

      <div class="mt-10 space-y-10 text-slate-300">
        <section aria-labelledby="disclaimer">
          <h2 id="disclaimer" class="font-display text-xl font-bold text-white">Disclaimer</h2>
          <p class="mt-3 leading-relaxed">
            MFlow is a personal finance tracking tool provided for informational and organizational
            purposes only. It is not a bank, a financial institution, or a registered financial
            advisor, and nothing in the app constitutes financial, tax, or legal advice.
          </p>
        </section>

        <section aria-labelledby="license">
          <h2 id="license" class="font-display text-xl font-bold text-white">License</h2>
          <p class="mt-3 leading-relaxed">
            Subject to these Terms, you are granted a limited, non-exclusive, non-transferable,
            revocable license to install and use MFlow on Android devices you own or control, for
            your personal, non-commercial use.
          </p>
        </section>

        <section aria-labelledby="responsibilities">
          <h2 id="responsibilities" class="font-display text-xl font-bold text-white">
            User Responsibilities
          </h2>
          <ul class="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>You are responsible for the accuracy of any manually entered transaction data.</li>
            <li>You are responsible for reviewing auto-categorized transactions in your Approval Queue.</li>
            <li>You are responsible for safeguarding any backup files you export.</li>
            <li>You must be legally permitted to use the device and accounts you connect to MFlow.</li>
          </ul>
        </section>

        <section aria-labelledby="no-warranty">
          <h2 id="no-warranty" class="font-display text-xl font-bold text-white">No Warranty</h2>
          <p class="mt-3 leading-relaxed">
            MFlow is provided "as is" and "as available," without warranties of any kind, whether
            express, implied, or statutory, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and non-infringement. We do not
            guarantee that SMS parsing, categorization, or any other automated feature will be
            error-free.
          </p>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability" class="font-display text-xl font-bold text-white">
            Limitation of Liability
          </h2>
          <p class="mt-3 leading-relaxed">
            To the maximum extent permitted by law, MFlow's developers shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of data,
            profits, or financial decisions made in reliance on information presented in the app,
            arising from your use of or inability to use MFlow.
          </p>
        </section>

        <section aria-labelledby="terms-contact">
          <h2 id="terms-contact" class="font-display text-xl font-bold text-white">Contact</h2>
          <p class="mt-3 leading-relaxed">
            Questions about these Terms? Email
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
