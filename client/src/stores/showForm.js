import { defineStore } from 'pinia'

export const useShowFormStore = defineStore('show-form', {
  state: () => {
    return { 
        showForm: false 
    }
  },
  actions: {
    showFormFunction() {
      this.showForm = true
    },
    hideFormFunction() {
      this.showForm = false
    }
  },
})