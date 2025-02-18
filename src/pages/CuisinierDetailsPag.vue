<template>
  <main class="cuisinier_details_main p-4 bg-gray-50 min-h-screen">
    <h1 class="text-center text-3xl font-semibold mb-8" v-if="cuisinier">
      {{ cuisinier.name }}
    </h1>
    
    <section v-if="cuisinier">
      <!-- Affichage de la photo et de la bio du cuisinier -->
      <div class="text-center mb-6">
        <img v-if="cuisinier.photo" :src="`/images/${cuisinier.photo}`" alt="Photo du cuisinier" class="w-48 h-48 mx-auto mb-4">
        <p class="text-lg text-gray-700">{{ cuisinier.bio }}</p>
      </div>

      <h3 class="text-2xl font-semibold mb-4">Spécialités</h3>
      <ul class="space-y-4">
        <li v-for="plat in cuisinier.plats" :key="plat.id" class="flex justify-between items-center bg-white p-4 shadow-md">
          <div>
            <p class="font-semibold">{{ plat.name }}</p>
            <p class="text-gray-500">{{ plat.price }}€</p>
          </div>
          <ButtonComponent @click="addToCart(plat)" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Ajouter au panier
          </ButtonComponent>
        </li>
      </ul>
    </section>

    <div v-else class="text-center text-xl text-gray-500">
      <p>Chargement des informations du cuisinier...</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { useRoute } from 'vue-router'
import { usePanierStore } from '../store/panier'

interface Plat {
  id: number
  name: string
  price: number
}

interface Cuisinier {
  id: number
  name: string
  bio: string
  photo: string
  plats: Plat[] 
}

const route = useRoute()
const cuisinier = ref<Cuisinier | null>(null)  

const panierStore = usePanierStore()

onMounted(async () => {
  try {
    const result = await fetch('/cuisiniers.json')  
    
    if (!result.ok) {
      throw new Error('Erreur de récupération des détails du cuisinier')
    }
    
    const cuisiniers = await result.json()

    const cuisinierId = parseInt(route.params.id as string, 10)  
    cuisinier.value = cuisiniers.find((c: Cuisinier) => c.id === cuisinierId) || null  

    if (!cuisinier.value) {
      throw new Error('Cuisinier introuvable')
    }

  } catch (error) {
    console.error('Erreur:', error)
  }
})

const addToCart = (plat: Plat) => {
  panierStore.ajouterAuPanier(plat) 
}
</script>
