import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import router from './router'
createApp(App).use(router).mount('#app')
