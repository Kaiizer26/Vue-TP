import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import SessionPage from './pages/SessionPage.vue'

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
        path: '/session/:id',
        component: SessionPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router