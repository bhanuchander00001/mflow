<script setup lang="ts">
import { ShoppingBag, UtensilsCrossed, Car, Zap } from '@lucide/vue'

const transactions = [
  { icon: ShoppingBag, label: 'BigBasket', category: 'Groceries', amount: '-₹1,240', color: 'text-primary' },
  { icon: UtensilsCrossed, label: 'Swiggy', category: 'Food', amount: '-₹420', color: 'text-accent' },
  { icon: Car, label: 'Uber', category: 'Transport', amount: '-₹185', color: 'text-secondary' },
  { icon: Zap, label: 'Electricity Bill', category: 'Utilities', amount: '-₹1,890', color: 'text-primary' },
]

const chartBars = [40, 65, 30, 80, 55, 90, 45]
</script>

<template>
  <div class="relative mx-auto w-[270px] shrink-0 select-none sm:w-[300px]" aria-hidden="true">
    <div
      class="relative rounded-[2.75rem] border-[10px] border-slate-800 bg-black p-2 shadow-2xl shadow-black/60"
    >
      <div
        class="absolute left-1/2 top-4 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-800"
      />
      <div
        class="flex h-[540px] flex-col overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-card to-background px-5 pb-6 pt-10 sm:h-[600px]"
      >
        <p class="text-xs text-slate-400">Good morning</p>
        <h3 class="font-display text-2xl font-bold text-white">Your Balance</h3>
        <p class="mt-1 font-display text-4xl font-extrabold text-white">₹84,320</p>
        <p class="mt-1 text-xs font-medium text-accent">+₹12,050 this month</p>

        <div class="mt-6 flex h-20 items-end gap-2">
          <div
            v-for="(bar, i) in chartBars"
            :key="i"
            class="flex-1 rounded-full bg-gradient-to-t from-primary/40 to-secondary"
            :style="{ height: `${bar}%` }"
          />
        </div>

        <p class="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Recent transactions
        </p>
        <div class="mt-3 flex flex-col gap-3">
          <div
            v-for="tx in transactions"
            :key="tx.label"
            class="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2.5"
          >
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                <component :is="tx.icon" class="h-4 w-4" :class="tx.color" />
              </span>
              <div class="leading-tight">
                <p class="text-sm font-medium text-white">{{ tx.label }}</p>
                <p class="text-[11px] text-slate-500">{{ tx.category }}</p>
              </div>
            </div>
            <span class="text-sm font-semibold text-white">{{ tx.amount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
