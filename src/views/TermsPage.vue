<script setup>
const developerName = 'Ops Dev'
const email = 'neuroexpert@bk.ru'
const phone = '+79090255509'
const phoneDisplay = '+7 (909) 025-55-09'
const website = 'https://med-privacy-ashen.vercel.app/'
const updatedAt = '25 сентября 2026 г.'
</script>

<template>
  <article class="space-y-6">
    <header class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div class="bg-gradient-to-r from-teal-600 to-cyan-700 px-6 py-8 text-white sm:px-8">
        <p class="mb-2 text-xs font-medium tracking-wide text-teal-100 uppercase">Medic AI</p>
        <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">Условия использования</h1>
        <p class="mt-3 max-w-2xl text-sm text-teal-50/95 sm:text-base">
          Правила использования приложения Medic AI. Используя приложение, вы соглашаетесь с этими
          условиями и политикой конфиденциальности.
        </p>
        <p class="mt-4 text-xs text-teal-100/90">Последнее обновление: {{ updatedAt }}</p>
      </div>
    </header>

    <section class="rounded-2xl border border-teal-200 bg-teal-50/60 p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Разработчик / контакты</h2>
      <p class="mt-2 text-sm leading-relaxed text-slate-700">
        По вопросам работы сервиса, поддержки и правовых документов обращайтесь к разработчику:
      </p>
      <ul class="mt-4 space-y-2 text-sm text-slate-800">
        <li><strong>Разработчик:</strong> {{ developerName }}</li>
        <li>
          <strong>Email:</strong>
          <a :href="`mailto:${email}`" class="font-semibold text-teal-700 hover:underline">{{
            email
          }}</a>
        </li>
        <li>
          <strong>Телефон:</strong>
          <a :href="`tel:${phone}`" class="font-semibold text-teal-700 hover:underline">{{
            phoneDisplay
          }}</a>
        </li>
        <li>
          <strong>Сайт:</strong>
          <a :href="website" class="font-semibold text-teal-700 hover:underline" target="_blank" rel="noopener">{{
            website
          }}</a>
        </li>
      </ul>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">1. Общие положения</h2>
      <ul class="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-700">
        <li>Medic AI — мобильное приложение для персональной поддержки здоровья и справочной информации.</li>
        <li>Используя сервис, пользователь соглашается с настоящими условиями и
          <RouterLink to="/privacy" class="font-medium text-teal-700 hover:underline">политикой конфиденциальности</RouterLink>.
        </li>
        <li>Для части функций требуется регистрация аккаунта и/или активная подписка.</li>
      </ul>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">2. Медицинский дисклеймер</h2>
      <ul class="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-700">
        <li>Medic AI предоставляет информационные материалы и ИИ-поддержку ознакомительного характера.</li>
        <li>Информация в приложении не является медицинским диагнозом, назначением лечения и не заменяет консультацию квалифицированного врача.</li>
        <li>ИИ может ошибаться. При появлении симптомов или вопросов о здоровье обращайтесь к врачу.</li>
        <li>Пользователь самостоятельно принимает решения на основе полученной информации.</li>
      </ul>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">3. Аккаунт и безопасность</h2>
      <ul class="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-700">
        <li>Пользователь обязан указывать достоверные данные при регистрации.</li>
        <li>Пользователь обязан хранить данные входа в аккаунт в безопасности и не передавать их третьим лицам.</li>
        <li>Запрещено использовать сервис для незаконных целей или попыток нарушить работу инфраструктуры.</li>
      </ul>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">4. Подписка и оплата</h2>
      <ul class="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-700">
        <li>Оплата и подписка выполняются согласно действующим тарифам, отображаемым в приложении.</li>
        <li>Платежи обрабатываются платёжным провайдером; приложение не хранит полные реквизиты карты.</li>
        <li>Правила и цены могут изменяться; актуальная информация публикуется в приложении.</li>
      </ul>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">5. Изменения условий</h2>
      <p class="mt-3 text-sm leading-relaxed text-slate-700">
        Разработчик может обновлять настоящие условия. Актуальная версия публикуется на этой странице.
        Продолжение использования приложения после обновления означает согласие с новой редакцией.
      </p>
    </section>
  </article>
</template>
