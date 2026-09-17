<script setup>
const contacts = [
  {
    role: 'Поддержка и вопросы по данным',
    email: 'support@medicalai.uz',
  },
  {
    role: 'Психологическая поддержка',
    email: 'psychology@medic-ai.ru',
  },
]

const sections = [
  {
    title: '1. Какие данные мы собираем',
    items: [
      'Данные аккаунта: email, имя и сведения профиля.',
      'Медицинские записи, которые вы сами добавляете в приложение (история, напоминания, кабинет и т.п.).',
      'Данные об оплате и подписке: статус, идентификатор платежа, сумма — без хранения полных реквизитов карты.',
      'Технические данные: тип устройства, версия приложения, логи ошибок и аналитика для стабильности сервиса.',
    ],
  },
  {
    title: '2. Как мы используем данные',
    items: [
      'Чтобы предоставлять функции Medical AI и сохранять ваш прогресс между сессиями.',
      'Чтобы обрабатывать подписку и платежи через платёжных провайдеров.',
      'Чтобы отвечать на обращения в поддержку и улучшать безопасность сервиса.',
      'Мы не продаём персональные данные третьим лицам.',
    ],
  },
  {
    title: '3. Защита и хранение',
    items: [
      'Доступ к данным ограничен и защищён контролем прав доступа.',
      'Передача данных осуществляется по защищённым каналам (HTTPS).',
      'Данные хранятся столько, сколько нужно для работы сервиса или пока вы не запросите удаление.',
    ],
  },
  {
    title: '4. Третьи стороны',
    items: [
      'Платёжные провайдеры получают только минимально необходимый набор данных для проведения оплаты.',
      'Инфраструктурные и аналитические сервисы могут обрабатывать технические логи для работы приложения.',
      'Передача данных происходит только в объёме, нужном для указанных целей.',
    ],
  },
  {
    title: '5. Ваши права',
    items: [
      'Запросить доступ к своим данным или их копию.',
      'Исправить неточные сведения в профиле.',
      'Запросить удаление аккаунта и связанных персональных данных.',
      'Отозвать согласие на обработку там, где это применимо, написав на контактные адреса ниже.',
    ],
  },
]
</script>

<template>
  <article class="space-y-6">
    <header class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div class="bg-gradient-to-r from-teal-600 to-cyan-700 px-6 py-8 text-white sm:px-8">
        <p class="mb-2 text-xs font-medium tracking-wide text-teal-100 uppercase">
          Medical AI
        </p>
        <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
          Политика конфиденциальности
        </h1>
        <p class="mt-3 max-w-2xl text-sm text-teal-50/95 sm:text-base">
          Мы бережно относимся к вашим персональным и медицинским данным и обрабатываем их
          прозрачно, в соответствии с целями работы приложения Medical AI.
        </p>
        <p class="mt-4 text-xs text-teal-100/90">
          Последнее обновление: 18 сентября 2026 г.
        </p>
      </div>
    </header>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Кратко о политике</h2>
      <p class="mt-3 text-sm leading-relaxed text-slate-700">
        Приложение Medical AI собирает только данные, необходимые для работы сервиса: аккаунт,
        сведения, которые вы вводите сами, статус оплаты и технические логи. Мы применяем меры
        защиты, ограничиваем доступ и не передаём лишние данные третьим сторонам. По вопросам
        конфиденциальности можно написать на адреса ниже.
      </p>
    </section>

    <section
      v-for="section in sections"
      :key="section.title"
      class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 class="text-lg font-semibold text-slate-900">{{ section.title }}</h2>
      <ul class="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-700">
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="rounded-2xl border border-teal-200 bg-teal-50/60 p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Контакты для связи</h2>
      <p class="mt-2 text-sm leading-relaxed text-slate-700">
        По вопросам конфиденциальности, удаления данных, поддержки и обратной связи напишите нам
        на Gmail / email. Обычно отвечаем в рабочие дни.
      </p>

      <ul class="mt-5 space-y-3">
        <li
          v-for="contact in contacts"
          :key="contact.email"
          class="flex flex-col gap-1 rounded-xl border border-teal-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <div>
            <p class="text-sm font-medium text-slate-900">{{ contact.role }}</p>
            <a
              :href="`mailto:${contact.email}`"
              class="mt-0.5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
            >
              <svg
                class="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="m5.5 7.5 6.5 5 6.5-5"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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

      <p class="mt-4 text-xs text-slate-500">
        Также все контакты доступны на странице
        <RouterLink to="/contact" class="font-medium text-teal-700 hover:underline">Контакты</RouterLink>.
      </p>
    </section>
  </article>
</template>
