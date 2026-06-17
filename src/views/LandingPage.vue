<template>
  <section class="space-y-8">
    <div class="rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white shadow-lg">
      <p class="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs tracking-wide">Medical AI App</p>
      <h1 class="mb-3 text-3xl font-bold md:text-4xl">Sizning tibbiy ma'lumotlaringiz xavfsiz himoyada</h1>
      <p class="max-w-2xl text-sm md:text-base">
        Medical AI ilovasi foydalanuvchi maxfiyligi, xavfsiz to'lov va tezkor yordam xizmatlari bilan ishlaydi.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <RouterLink
          to="/privacy"
          class="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-slate-100"
        >
          Privacy Policy
        </RouterLink>
        <RouterLink
          to="/billing/success"
          class="rounded-lg border border-white/50 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
        >
          To'lov qaytish sahifasi
        </RouterLink>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <RouterLink to="/help" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow">
        <h2 class="mb-2 text-lg font-semibold text-slate-900">Help</h2>
        <p class="text-sm text-slate-600">Muammolar bo'yicha tezkor yo'riqnoma va ko'p so'raladigan savollar.</p>
      </RouterLink>
      <RouterLink to="/contact" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow">
        <h2 class="mb-2 text-lg font-semibold text-slate-900">Contact</h2>
        <p class="text-sm text-slate-600">Biz bilan bog'lanish: email, telefon va qo'llab-quvvatlash kanallari.</p>
      </RouterLink>
      <RouterLink to="/terms" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow">
        <h2 class="mb-2 text-lg font-semibold text-slate-900">Terms of Use</h2>
        <p class="text-sm text-slate-600">Xizmatdan foydalanish shartlari va umumiy huquqiy qoidalar.</p>
      </RouterLink>
    </div>
  </section>
</template>
