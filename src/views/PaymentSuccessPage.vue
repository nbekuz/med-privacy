<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchRobokassaStatus } from '../lib/billingApi'

const route = useRoute()
const fallbackReturnUrl = 'medicalai://billing/success'

const loading = ref(false)
const apiError = ref('')
const apiData = ref(null)

const paymentData = computed(() => ({
  outSum: route.query.OutSum || '-',
  invId: route.query.InvId || '-',
  signatureValue: route.query.SignatureValue || '-',
  isTest: route.query.IsTest || '-',
  culture: route.query.Culture || '-',
}))

const requestQuery = computed(() => ({
  OutSum: route.query.OutSum,
  InvId: route.query.InvId,
  SignatureValue: route.query.SignatureValue,
  IsTest: route.query.IsTest,
  Culture: route.query.Culture,
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

async function loadStatus() {
  loading.value = true
  apiError.value = ''
  try {
    apiData.value = await fetchRobokassaStatus('success', requestQuery.value)
  } catch (e) {
    apiError.value = e instanceof Error ? e.message : String(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadStatus()
})
</script>

<template>
  <section class="mx-auto max-w-2xl rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
    <div class="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
      Платеж успешен
    </div>
    <h1 class="mb-2 text-2xl font-bold text-slate-900">Оплата успешно завершена</h1>
    <p class="mb-6 text-sm text-slate-700">Мы проверяем оплату через backend и показываем результат ниже.</p>

    <div class="mb-6 rounded-xl border border-slate-200 bg-white p-4 text-sm">
      <div class="mb-2 flex flex-wrap items-center justify-between gap-2">
        <p class="font-medium text-slate-900">Ответ API</p>
        <button
          type="button"
          class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
          @click="loadStatus"
        >
          Обновить
        </button>
      </div>
      <p v-if="loading" class="text-slate-600">Загрузка...</p>
      <p v-else-if="apiError" class="text-red-600">Ошибка: {{ apiError }}</p>
      <div v-else-if="apiData" class="space-y-1 text-slate-700">
        <p><strong>ok:</strong> {{ apiData.ok }}</p>
        <p><strong>message:</strong> {{ apiData.message }}</p>
        <p><strong>payment_id:</strong> {{ apiData.payment_id }}</p>
        <p><strong>status:</strong> {{ apiData.status }}</p>
      </div>
      <p v-else class="text-slate-600">Нет данных</p>
    </div>

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
