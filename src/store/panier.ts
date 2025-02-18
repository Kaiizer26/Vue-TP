import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
  state: () => ({
    panier: [] as Array<{ id: number, name: string, price: number }>
  }),
  actions: {
    ajouterAuPanier(plat: { id: number, name: string, price: number }) {
      const existingPlat = this.panier.find(item => item.id === plat.id)

      if (!existingPlat) {
        this.panier.push(plat)
      }
    },
    retirerDuPanier(id: number) {
      this.panier = this.panier.filter(item => item.id !== id)
    }
  }
})
