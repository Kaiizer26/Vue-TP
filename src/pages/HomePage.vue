<template>
    <main class="home_main p-4 bg-gray-50">
      <h1 class="text-center text-3xl font-semibold mb-8">Page d'accueil</h1>
      <section class="flex justify-center">
        <ButtonComponent variant="primary" @click="goToCuisiniers">
          Voir les cuisiniers
        </ButtonComponent>
      </section>
      <section class="flex justify-center mt-4">
        <ButtonComponent variant="primary" @click="goToLogin">
          Se connecter
        </ButtonComponent>
        <ButtonComponent variant="secondary" @click="goToRegister">
          S'inscrire
        </ButtonComponent>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import ButtonComponent from '../components/ButtonComponent.vue'
  
  const router = useRouter()
  
  const goToCuisiniers = () => {
    router.push('/cuisiniers')
  }
  
  const goToLogin = () => {
    router.push('/login')
  }
  
  const goToRegister = () => {
    router.push('/register')
  }
  </script>
  