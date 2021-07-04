import create from 'zustand'
import { persist } from 'zustand/middleware'

export const userStore = create(
  persist(
    set => ({
      user: undefined,
      setUser: newUser => set({ user: newUser }),
      repos: undefined,
      setRepos: newRepos => set({ repos: newRepos }),
      starred: undefined,
      setStarred: newStarred => set({ starred: newStarred }),
    }),
    {
      name: 'user-storage',
    }
  )
)
