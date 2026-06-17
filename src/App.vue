<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const mobileOpen = ref(false)
const route = useRoute()

const navLinks = [
  { to: '/', label: 'Главная', exact: true },
  { to: '/privacy', label: 'Конфиденциальность' },
  { to: '/help', label: 'Помощь' },
  { to: '/contact', label: 'Контакты' },
  { to: '/terms', label: 'Условия' },
]

const linkClass =
  'rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900'

function closeMobile() {
  mobileOpen.value = false
}

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  },
)

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-slate-50 text-slate-800">
    <header
      class="relative sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80"
    >
      <div class="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-4 sm:px-6">
        <RouterLink
          to="/"
          class="shrink-0 text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-teal-700"
          @click="closeMobile"
        >
          Medical Privacy
        </RouterLink>

        <nav class="hidden items-center gap-1 md:flex" aria-label="Основная навигация">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="linkClass"
            :exact-active-class="
              link.exact
                ? 'bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                : undefined
            "
            active-class="bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 md:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          aria-label="Открыть меню"
          @click="mobileOpen = !mobileOpen"
        >
          <svg
            v-if="!mobileOpen"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        v-show="mobileOpen"
        class="fixed inset-0 top-16 z-40 bg-black/20 md:hidden"
        aria-hidden="true"
        @click="closeMobile"
      />

      <nav
        v-show="mobileOpen"
        id="mobile-nav"
        class="absolute left-0 right-0 top-full z-50 border-b border-slate-200 bg-white px-4 py-3 shadow-lg md:hidden"
        aria-label="Мобильная навигация"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[linkClass, 'block']"
          :exact-active-class="
            link.exact
              ? 'bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
              : undefined
          "
          active-class="bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
          @click="closeMobile"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
      <RouterView />
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-slate-600">
        <p>© {{ new Date().getFullYear() }} Medical AI</p>
        <div class="flex gap-3">
          <RouterLink to="/privacy" class="hover:text-slate-900">Конфиденциальность</RouterLink>
          <RouterLink to="/terms" class="hover:text-slate-900">Условия</RouterLink>
          <RouterLink to="/contact" class="hover:text-slate-900">Контакты</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>
