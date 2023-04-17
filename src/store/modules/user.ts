import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    userName: '',
  }),
  actions: {
    setUserName(name: string) {
      this.userName = name
    },
  },
})
