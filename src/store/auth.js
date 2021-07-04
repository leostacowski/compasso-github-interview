import create from 'zustand'
import { persist } from 'zustand/middleware'

export const authStore = create(
  persist(
    set => ({
      loading: false,
      setLoading: value => set({ loading: value }),
      logged: false,
      setLogged: value => set({ logged: value }),
      token: undefined,
      setToken: newToken => set({ token: newToken }),
      loginCode: undefined,
      setLoginCode: newLoginCode => set({ loginCode: newLoginCode }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
