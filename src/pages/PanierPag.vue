<template>
  <main class="panier_main p-4 bg-gray-50">
    <h1 class="text-center text-3xl font-semibold mb-8">Mon Panier</h1>
    <section v-if="panier.length > 0">
      <ul>
        <li v-for="item in panier" :key="item.id">
  {{ item.name }} - {{ item.price }}€ (Quantité: {{ item.quantity }})
  <ButtonComponent @click="removeFromCart(item)">
    Retirer 1
  </ButtonComponent>
</li>


      </ul>
    </section>
    <div v-else>
      <p>Le panier est vide.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { usePanierStore } from '../store/panier'

const panierStore = usePanierStore()

const panier = computed(() => panierStore.panier)

const removeFromCart = (item: any) => {
  panierStore.retirerDuPanier(item.id)
}
</script>
