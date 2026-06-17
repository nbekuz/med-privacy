<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const toastVisible = ref(false)
const toastMessage = ref('')
let toastTimer

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

function detectPlatform() {
  const ua = navigator.userAgent || ''
  if (/iPad|iPhone|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'ios'
  }
  if (/Android/i.test(ua)) {
    return 'android'
  }
  return 'other'
}

function getUnavailableMessage() {
  const platform = detectPlatform()
  if (platform === 'ios') {
    return 'Приложение пока недоступно в App Store. Скоро появится в магазине.'
  }
  if (platform === 'android') {
    return 'Приложение пока недоступно в Google Play. Скоро появится в магазине.'
  }
  return 'Приложение пока недоступно. Скоро появится в Google Play и App Store.'
}

function showToast(message) {
  toastMessage.value = message
  toastVisible.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastVisible.value = false
  }, 4500)
}

function goToApp() {
  showToast(getUnavailableMessage())
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

  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="toastVisible"
      role="status"
      aria-live="polite"
      class="fixed inset-x-4 bottom-6 z-100 mx-auto max-w-md rounded-xl border border-slate-200 bg-slate-900 px-4 py-3 text-center text-sm leading-relaxed text-white shadow-lg"
    >
      {{ toastMessage }}
    </div>
  </Transition>
</template>
