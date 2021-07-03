import create from 'zustand'
import { persist } from 'zustand/middleware'

export const authStore = create(
  persist(
    set => ({
      client_id: process.env.CLIENT_ID,
      client_id_secret: process.env.CLIENT_ID_SECRET,
      loading: false,
      setLoading: value => set({ loading: value }),
      logged: false,
      setLogged: value => set({ logged: value }),
      token: undefined,
      setToken: newToken => set({ token: newToken }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
