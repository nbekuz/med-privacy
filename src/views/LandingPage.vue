<template>
  <section class="space-y-8">
    <div class="rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white shadow-lg">
      <p class="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs tracking-wide">Medical AI App</p>
      <h1 class="mb-3 text-3xl font-bold md:text-4xl">Ваши медицинские данные под надежной защитой</h1>
      <p class="max-w-2xl text-sm md:text-base">
        Приложение Medical AI обеспечивает защиту данных, безопасные платежи и быструю поддержку пользователей.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <RouterLink
          to="/privacy"
          class="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-slate-100"
        >
          Политика конфиденциальности
        </RouterLink>
        <RouterLink
          to="/billing/success"
          class="rounded-lg border border-white/50 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
        >
          Страница возврата после оплаты
        </RouterLink>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <RouterLink to="/help" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow">
        <h2 class="mb-2 text-lg font-semibold text-slate-900">Помощь</h2>
        <p class="text-sm text-slate-600">Инструкции по частым вопросам и оперативная помощь по проблемам.</p>
      </RouterLink>
      <RouterLink to="/contact" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow">
        <h2 class="mb-2 text-lg font-semibold text-slate-900">Контакты</h2>
        <p class="text-sm text-slate-600">Свяжитесь с нами по email, телефону или через каналы поддержки.</p>
      </RouterLink>
      <RouterLink to="/terms" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow">
        <h2 class="mb-2 text-lg font-semibold text-slate-900">Условия использования</h2>
        <p class="text-sm text-slate-600">Правила использования сервиса и основные юридические положения.</p>
      </RouterLink>
    </div>
  </section>
</template>
