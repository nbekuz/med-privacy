<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const fallbackReturnUrl = 'medicalai://billing/success'

const amount = computed(() => {
  const sum = route.query.OutSum
  if (!sum) return null

  const value = Number(String(sum).replace(',', '.'))
  if (Number.isNaN(value)) return String(sum)

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(value)
})

const orderId = computed(() => {
  const id = route.query.InvId
  return id ? String(id) : null
})

const returnToAppUrl = computed(() => {
  const configured = import.meta.env.VITE_RETURN_TO_APP_URL
  const baseUrl = configured && configured.trim() ? configured : fallbackReturnUrl
  const query = new URLSearchParams({
    outSum: String(route.query.OutSum || ''),
    invId: String(route.query.InvId || ''),
    isTest: String(route.query.IsTest || ''),
  }).toString()
  return query ? `${baseUrl}?${query}` : baseUrl
})

function goToApp() {
  window.location.href = returnToAppUrl.value
}
</script>

<template>
  <section class="mx-auto max-w-md rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-sm">
    <div
      class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
      aria-hidden="true"
    >
      <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <div class="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
      Платёж успешен
    </div>

    <h1 class="mb-2 text-2xl font-bold text-slate-900">Оплата завершена</h1>
    <p class="mb-6 text-sm leading-relaxed text-slate-600">
      Спасибо! Подписка будет активирована в приложении в течение нескольких минут.
    </p>

    <dl
      v-if="amount || orderId"
      class="mb-6 space-y-2 rounded-xl bg-slate-50 px-4 py-3 text-left text-sm"
    >
      <div v-if="amount" class="flex items-center justify-between gap-4">
        <dt class="text-slate-500">Сумма</dt>
        <dd class="font-semibold text-slate-900">{{ amount }}</dd>
      </div>
      <div v-if="orderId" class="flex items-center justify-between gap-4">
        <dt class="text-slate-500">Номер заказа</dt>
        <dd class="font-semibold text-slate-900">{{ orderId }}</dd>
      </div>
    </dl>

    <button
      type="button"
      class="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
      @click="goToApp"
    >
      Вернуться в приложение
    </button>
  </section>
</template>
