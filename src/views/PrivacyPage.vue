<script setup>
const developerName = 'Ops Dev'
const email = 'neuroexpert@bk.ru'
const phone = '+79090255509'
const phoneDisplay = '+7 (909) 025-55-09'
const website = 'https://med-privacy-ashen.vercel.app/'
const updatedAt = '25 сентября 2026 г.'

const sections = [
  {
    title: '1. Какие данные мы собираем',
    items: [
      'Данные аккаунта: email, имя, фамилия, имя пользователя, пароль (хранится на сервере в защищённом виде), при необходимости номер телефона и аватар.',
      'Данные профиля здоровья, которые вы указываете сами: пол, город, дата рождения, рост, вес.',
      'Семейные профили: сведения о членах семьи, которые вы добавляете (в том числе сведения о хронических заболеваниях, если вы их указываете).',
      'Медицинские записи: история заболеваний, визиты к врачам, результаты анализов (включая загруженные фото), назначения и напоминания.',
      'Данные «Аптечки»: список лекарств, сроки годности, фото упаковки при распознавании.',
      'Данные для ИИ-помощника: выбранные симптомы, текстовое описание, части тела, температура, давление и идентификатор профиля, для которого выполняется запрос.',
      'Данные об оплате и подписке: статус, идентификатор платежа, сумма. Полные реквизиты банковской карты в приложении не хранятся.',
      'Технические данные: тип устройства, версия приложения, сведения, необходимые для стабильности сервиса.',
      'Геолокация — только при вашем разрешении, для показа ближайших аптек и медицинских учреждений на карте.',
      'При входе через Google: идентификатор и базовые данные аккаунта Google, необходимые для авторизации (через Firebase Authentication).',
    ],
  },
  {
    title: '2. Как мы используем данные',
    items: [
      'Чтобы предоставлять функции приложения Medic AI и синхронизировать данные между устройствами.',
      'Чтобы обрабатывать запросы ИИ-помощника, распознавания упаковок лекарств и OCR анализов.',
      'Чтобы обрабатывать подписку и платежи через платёжных провайдеров.',
      'Чтобы отвечать на обращения в поддержку и обеспечивать безопасность аккаунта.',
      'Мы не продаём персональные данные третьим лицам.',
    ],
  },
  {
    title: '3. Передача данных и третьи стороны',
    items: [
      'Данные обрабатываются на сервере приложения: https://admin.medic-ai.ru.',
      'Для функций ИИ запросы обрабатываются через наш backend. В обработке может участвовать сервис OpenAI (или аналогичный ИИ-провайдер) на стороне сервера: на обработку могут передаваться симптомы, текст запроса и связанные сведения, необходимые для ответа.',
      'Для входа через Google используются Firebase Authentication / Google Sign-In.',
      'Для карты учреждений используются сервисы Яндекс (карты / геокодирование).',
      'Платёжные провайдеры получают только минимально необходимый набор данных для проведения оплаты.',
      'Передача данных происходит в объёме, нужном для указанных целей работы сервиса.',
    ],
  },
  {
    title: '4. Защита и хранение',
    items: [
      'Обмен данными с сервером выполняется по защищённому каналу HTTPS.',
      'Доступ к пользовательским данным на сервере ограничен средствами контроля доступа.',
      'Токены сессии могут сохраняться локально на устройстве для поддержания входа в аккаунт.',
      'Данные хранятся столько, сколько нужно для работы сервиса, либо до удаления аккаунта / запроса на удаление.',
    ],
  },
  {
    title: '5. ИИ и медицинская информация',
    items: [
      'Medic AI предоставляет справочную информацию и ИИ-поддержку ознакомительного характера.',
      'Ответы ИИ не являются медицинским диагнозом, назначением лечения и не заменяют консультацию врача.',
      'ИИ может ошибаться. При симптомах или вопросах о здоровье обращайтесь к квалифицированному специалисту.',
    ],
  },
  {
    title: '6. Ваши права',
    items: [
      'Запросить доступ к своим данным или разъяснение по их обработке.',
      'Исправить неточные сведения в профиле через приложение.',
      'Запросить удаление аккаунта и связанных персональных данных.',
      'Отозвать согласие на обработку там, где это применимо, написав разработчику по контактам ниже.',
    ],
  },
]
</script>

<template>
  <article class="space-y-6">
    <header class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div class="bg-gradient-to-r from-teal-600 to-cyan-700 px-6 py-8 text-white sm:px-8">
        <p class="mb-2 text-xs font-medium tracking-wide text-teal-100 uppercase">
          Medic AI
        </p>
        <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
          Политика конфиденциальности
        </h1>
        <p class="mt-3 max-w-2xl text-sm text-teal-50/95 sm:text-base">
          Настоящая политика описывает, какие данные обрабатывает приложение Medic AI, для каких
          целей и как связаться с разработчиком по вопросам персональных данных.
        </p>
        <p class="mt-4 text-xs text-teal-100/90">
          Последнее обновление: {{ updatedAt }}
        </p>
      </div>
    </header>

    <section class="rounded-2xl border border-teal-200 bg-teal-50/60 p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Разработчик / оператор</h2>
      <p class="mt-2 text-sm leading-relaxed text-slate-700">
        Разработчик приложения Medic AI и контактное лицо по вопросам обработки персональных данных:
      </p>
      <dl class="mt-4 space-y-2 text-sm text-slate-800">
        <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <dt class="font-medium text-slate-500 sm:w-28 shrink-0">Разработчик</dt>
          <dd class="font-semibold">{{ developerName }}</dd>
        </div>
        <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <dt class="font-medium text-slate-500 sm:w-28 shrink-0">Email</dt>
          <dd>
            <a :href="`mailto:${email}`" class="font-semibold text-teal-700 hover:underline">{{
              email
            }}</a>
          </dd>
        </div>
        <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <dt class="font-medium text-slate-500 sm:w-28 shrink-0">Телефон</dt>
          <dd>
            <a :href="`tel:${phone}`" class="font-semibold text-teal-700 hover:underline">{{
              phoneDisplay
            }}</a>
          </dd>
        </div>
        <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <dt class="font-medium text-slate-500 sm:w-28 shrink-0">Сайт</dt>
          <dd>
            <a :href="website" class="font-semibold text-teal-700 hover:underline" target="_blank" rel="noopener">{{
              website
            }}</a>
          </dd>
        </div>
      </dl>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Кратко о политике</h2>
      <p class="mt-3 text-sm leading-relaxed text-slate-700">
        Приложение Medic AI собирает данные, необходимые для работы сервиса: аккаунт, сведения о
        здоровье, которые вы вводите сами, историю, аптечку, запросы к ИИ-помощнику, статус оплаты и
        технические данные. Данные передаются на наш сервер и могут обрабатываться сторонними
        сервисами (ИИ, авторизация Google, карты, платежи) в объёме, нужном для функций приложения.
        По вопросам конфиденциальности и удаления данных пишите на
        <a :href="`mailto:${email}`" class="font-medium text-teal-700 hover:underline">{{ email }}</a>.
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
        По вопросам конфиденциальности, удаления данных, поддержки и обратной связи свяжитесь с
        разработчиком. Обычно отвечаем в рабочие дни.
      </p>

      <ul class="mt-5 space-y-3">
        <li
          class="flex flex-col gap-1 rounded-xl border border-teal-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <div>
            <p class="text-sm font-medium text-slate-900">Email</p>
            <a
              :href="`mailto:${email}`"
              class="mt-0.5 inline-flex text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
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
          class="flex flex-col gap-1 rounded-xl border border-teal-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <div>
            <p class="text-sm font-medium text-slate-900">Телефон</p>
            <a
              :href="`tel:${phone}`"
              class="mt-0.5 inline-flex text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
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

      <p class="mt-4 text-xs text-slate-500">
        Также контакты доступны на странице
        <RouterLink to="/contact" class="font-medium text-teal-700 hover:underline">Контакты</RouterLink>
        и в
        <RouterLink to="/terms" class="font-medium text-teal-700 hover:underline">Условиях использования</RouterLink>.
      </p>
    </section>
  </article>
</template>
