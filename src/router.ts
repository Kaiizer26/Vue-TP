import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/Register.vue'
import CuisinierPage from './pages/CuisinierPageList.vue'
import CuisinierDetailsPage from './pages/CuisinierDetailsPag.vue'
import PanierPage from './pages/PanierPag.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/cuisiniers',
    component: CuisinierPage
  },
  {
    path: '/cuisinier/:id',
    component: CuisinierDetailsPage
  },
  {
    path: '/panier',
    component: PanierPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
