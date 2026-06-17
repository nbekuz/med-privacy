<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchRobokassaStatus } from '../lib/billingApi'

const route = useRoute()
const loading = ref(false)
const apiError = ref('')
const apiData = ref(null)

const requestQuery = computed(() => ({
  OutSum: route.query.OutSum,
  InvId: route.query.InvId,
  SignatureValue: route.query.SignatureValue,
  IsTest: route.query.IsTest,
  Culture: route.query.Culture,
}))

async function loadStatus() {
  loading.value = true
  apiError.value = ''
  try {
    apiData.value = await fetchRobokassaStatus('result', requestQuery.value)
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
  <section class="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Результат</div>
    <h1 class="mb-2 text-2xl font-bold text-slate-900">Статус платежа</h1>
    <p class="mb-6 text-sm text-slate-700">Страница для обработки `result` callback и отображения ответа backend.</p>

    <div class="rounded-xl border border-slate-200 bg-white p-4 text-sm">
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
  </section>
</template>

