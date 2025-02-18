<template>
    <nav class="bg-blue-500 p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo / Nom -->
        <a href="/" class="text-white text-2xl font-semibold">FoodApp</a>
  
        <!-- Liens de navigation -->
        <div class="space-x-4">
          <router-link to="/login" class="text-white hover:text-gray-200">Se connecter</router-link>
          <router-link to="/register" class="text-white hover:text-gray-200">S'inscrire</router-link>
          <router-link to="/cuisiniers" class="text-white hover:text-gray-200">Liste des cuisiniers</router-link>
          <router-link to="/panier" class="text-white hover:text-gray-200">
            Panier ({{ panierLength }})
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { usePanierStore } from '../store/panier'
  
  const panierStore = usePanierStore()
  
  // Calcul du nombre d'éléments dans le panier
  const panierLength = computed(() => panierStore.panier.length)
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter plus de styles ici si nécessaire */
  </style>
  