<template>
  <main class="cuisinier_list p-4 bg-gray-100 min-h-screen">
    <h1 class="text-center text-3xl font-semibold mb-8 text-gray-800">Liste des Cuisiniers</h1>
    <section class="cuisinier_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="cuisinier in cuisiniers"
        :key="cuisinier.id"
        class="cuisinier_card bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <img
          :src="cuisinier.photo"
          :alt="cuisinier.name"
          class="w-full h-56 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ cuisinier.name }}</h2>
          <p class="text-gray-600 text-sm mb-4">{{ cuisinier.bio }}</p>
          <button
            @click="goToCuisinierPage(cuisinier.id)"
            class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Voir ses plats
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface Cuisinier {
  id: number
  name: string
  bio: string
  photo: string
  plats: Array<{
    id: number
    name: string
    price: number
  }>
}

const cuisiniers = ref<Cuisinier[]>([])

const router = useRouter()

onMounted(async () => {
  try {
    const result = await fetch('cuisiniers.json')
    if (!result.ok) {
      throw new Error('Erreur de récupération des cuisiniers')
    }
    const data = await result.json()
    console.log(data)
    cuisiniers.value = data
  } catch (error) {
    console.error('Erreur:', error)
  }
})

const goToCuisinierPage = (id: number) => {
  router.push(`/cuisinier/${id}`)
}
</script>
