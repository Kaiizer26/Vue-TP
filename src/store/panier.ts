import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
    state: () => ({
        panier: [] as Array<{ id: number, name: string, price: number, quantity: number }>
      }),
      
  actions: {
    ajouterAuPanier(plat: { id: number, name: string, price: number }) {
        const existingPlat = this.panier.find(item => item.id === plat.id)
      
        if (existingPlat) {
          existingPlat.quantity += 1
        } else {
          this.panier.push({...plat, quantity: 1}) 
        }
      },
      
      
      retirerDuPanier(id: number) {
        const itemIndex = this.panier.findIndex(item => item.id === id)
      
        if (itemIndex !== -1) {
          const item = this.panier[itemIndex]
      
          if (item.quantity > 1) {
            item.quantity -= 1
          } else {
            this.panier.splice(itemIndex, 1)
          }
        }
      }
      
      
      
  }
})
