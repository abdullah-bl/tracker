import { notification } from '@tauri-apps/api'
import create from 'zustand'

interface SettingsState {
  isLoading?: boolean
  isSaving?: boolean
  isSaved?: boolean
  isError?: boolean
  error?: string
  init: () => void
  setIsLoading: () => void
}

export const useUIStore = create<SettingsState>(
  (set, get) => ({
    isLoading: false,
    isSaving: false,
    isSaved: false,
    isError: false,
    error: '',
    setIsLoading: () => set(state => ({ ...state, isLoading: !state.isLoading })),
    init: async () => {
      notification.requestPermission()
      set({ isLoading: true })
      setTimeout(() => {
        set({ isLoading: false })
      }, 900);
    }
    })
  )




