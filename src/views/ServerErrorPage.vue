<template>
  <section class="rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm">
    <h1 class="mb-2 text-2xl font-bold text-slate-900">Ошибка сервера (500)</h1>
    <p class="mb-5 text-sm text-slate-700">На сервере произошла ошибка. Пожалуйста, попробуйте позже.</p>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <RouterLink to="/" class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
        На главную
      </RouterLink>
      <RouterLink
        to="/contact"
        class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Связаться с поддержкой
      </RouterLink>
    </div>
  </section>
</template>
