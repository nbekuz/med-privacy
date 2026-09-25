<script setup>
const developerName = 'Ops Dev'
const email = 'neuroexpert@bk.ru'
const phone = '+79090255509'
const phoneDisplay = '+7 (909) 025-55-09'
</script>

<template>
  <section class="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <h1 class="text-2xl font-bold text-slate-900">Контакты</h1>
    <p class="text-sm leading-relaxed text-slate-700">
      Контакты разработчика приложения Medic AI. Если у вас есть вопросы или проблемы, свяжитесь с
      нами:
    </p>

    <p class="text-sm text-slate-800">
      <strong>Разработчик:</strong> {{ developerName }}
    </p>

    <ul class="space-y-3">
      <li
        class="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="text-sm font-medium text-slate-900">Email</p>
          <a
            :href="`mailto:${email}`"
            class="text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            {{ email }}
          </a>
        </div>
        <a
          :href="`mailto:${email}`"
          class="inline-flex w-fit items-center rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-teal-700"
        >
          Написать
        </a>
      </li>
      <li
        class="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="text-sm font-medium text-slate-900">Телефон</p>
          <a
            :href="`tel:${phone}`"
            class="text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            {{ phoneDisplay }}
          </a>
        </div>
        <a
          :href="`tel:${phone}`"
          class="inline-flex w-fit items-center rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-teal-700"
        >
          Позвонить
        </a>
      </li>
    </ul>

    <div class="border-t border-slate-200 pt-4 text-sm text-slate-700">
      <p><strong>Время работы:</strong> Понедельник — Суббота, 09:00 — 18:00</p>
    </div>
  </section>
</template>
