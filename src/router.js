import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import PrivacyPage from './views/PrivacyPage.vue'
import HelpPage from './views/HelpPage.vue'
import ContactPage from './views/ContactPage.vue'
import TermsPage from './views/TermsPage.vue'
import PaymentSuccessPage from './views/PaymentSuccessPage.vue'
import NotFoundPage from './views/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/privacy', name: 'privacy', component: PrivacyPage },
  { path: '/help', name: 'help', component: HelpPage },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/terms', name: 'terms', component: TermsPage },
  {
    path: '/billing/success',
    name: 'billing-success',
    component: PaymentSuccessPage,
  },
  {
    path: '/api/billing/robokassa/success/',
    name: 'robokassa-success',
    component: PaymentSuccessPage,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
