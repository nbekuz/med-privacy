<script setup>
const contacts = [
  {
    role: 'Поддержка и конфиденциальность',
    email: 'support@medicalai.uz',
  },
  {
    role: 'Психологическая поддержка',
    email: 'psychology@medic-ai.ru',
  },
]
</script>

<template>
  <section class="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <h1 class="text-2xl font-bold text-slate-900">Контакты</h1>
    <p class="text-sm leading-relaxed text-slate-700">
      Если у вас есть вопросы или проблемы, свяжитесь с нами по email (Gmail) или телефону:
    </p>

    <ul class="space-y-3">
      <li
        v-for="contact in contacts"
        :key="contact.email"
        class="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="text-sm font-medium text-slate-900">{{ contact.role }}</p>
          <a
            :href="`mailto:${contact.email}`"
            class="text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            {{ contact.email }}
          </a>
        </div>
        <a
          :href="`mailto:${contact.email}`"
          class="inline-flex w-fit items-center rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-teal-700"
        >
          Написать
        </a>
      </li>
    </ul>

    <div class="space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-700">
      <p><strong>Телефон:</strong> +7 (999) 000-00-00</p>
      <p><strong>Время работы:</strong> Понедельник — Суббота, 09:00 — 18:00</p>
    </div>
  </section>
</template>
