<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const fallbackReturnUrl = 'medicalai://billing/success'

const paymentData = computed(() => ({
  outSum: route.query.OutSum || '-',
  invId: route.query.InvId || '-',
  signatureValue: route.query.SignatureValue || '-',
  isTest: route.query.IsTest || '-',
  culture: route.query.Culture || '-',
}))

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
  <section class="mx-auto max-w-2xl rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
    <div class="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
      Платеж успешен
    </div>
    <h1 class="mb-2 text-2xl font-bold text-slate-900">Оплата успешно завершена</h1>
    <p class="mb-6 text-sm text-slate-700">
      Параметры `success` от Robokassa, которые возвращает backend, успешно считаны. Теперь можно вернуться в приложение.
    </p>

    <div class="mb-6 grid gap-2 rounded-xl bg-slate-50 p-4 text-sm">
      <p><strong>OutSum:</strong> {{ paymentData.outSum }}</p>
      <p><strong>InvId:</strong> {{ paymentData.invId }}</p>
      <p><strong>SignatureValue:</strong> {{ paymentData.signatureValue }}</p>
      <p><strong>IsTest:</strong> {{ paymentData.isTest }}</p>
      <p><strong>Culture:</strong> {{ paymentData.culture }}</p>
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <button
        type="button"
        @click="goToApp"
        class="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
      >
        Вернуться в приложение
      </button>
      <p class="text-xs text-slate-500">Deep link: {{ returnToAppUrl }}</p>
    </div>
  </section>
</template>
