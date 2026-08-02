import type { Component } from 'vue'

export interface Feature {
  icon: Component
  title: string
  description: string
}

export interface WhyReason {
  icon: Component
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}
