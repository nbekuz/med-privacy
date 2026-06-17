<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <RouterLink to="/" class="text-lg font-semibold text-slate-900">Medical Privacy</RouterLink>
        <nav class="flex flex-wrap items-center gap-3 text-sm">
          <RouterLink to="/" class="rounded-md px-3 py-2 hover:bg-slate-100">Landing</RouterLink>
          <RouterLink to="/privacy" class="rounded-md px-3 py-2 hover:bg-slate-100">Privacy</RouterLink>
          <RouterLink to="/help" class="rounded-md px-3 py-2 hover:bg-slate-100">Help</RouterLink>
          <RouterLink to="/contact" class="rounded-md px-3 py-2 hover:bg-slate-100">Contact</RouterLink>
          <RouterLink to="/terms" class="rounded-md px-3 py-2 hover:bg-slate-100">Terms</RouterLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-5xl px-4 py-8">
      <RouterView />
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-slate-600">
        <p>© {{ new Date().getFullYear() }} Medical AI</p>
        <div class="flex gap-3">
          <RouterLink to="/privacy" class="hover:text-slate-900">Privacy</RouterLink>
          <RouterLink to="/terms" class="hover:text-slate-900">Terms</RouterLink>
          <RouterLink to="/contact" class="hover:text-slate-900">Contact</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>
