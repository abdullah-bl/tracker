import { fs, notification } from '@tauri-apps/api'
import create from 'zustand'
import { DATA_PATH } from '../utils'


interface DataState {
  isError: boolean
  error: unknown | null
  isLoading: boolean
  employees: any[]
  appends: any[]
  setEmployees: (employees: any[]) => void
  setAppends: (appends: any[]) => void
  setIsLoading: () => void
  init: () => void
}


export const useStore = create<DataState>((set, get) => ({
  isError: false,
  isLoading: false,
  error: null,
  employees: [],
  appends: [],
  setEmployees: (employees: any[]) => set(state => ({ ...state, employees })),
  setAppends: (employees: any[]) => set(state => ({ ...state, employees })),
  setIsLoading: () => set(state => ({ ...state, isLoading: !state.isLoading })),
  init: async () => {
    set({ isLoading: true })
    try {
      const employees = await fs.readTextFile('employees.json', { dir: DATA_PATH })
      const appends = await fs.readTextFile('appends.json', { dir: DATA_PATH })
      set({ isLoading: false, employees: JSON.parse(employees), appends: JSON.parse(appends) })
    } catch (error) {
      console.error(error)
      notification.sendNotification('Error')
      await fs.writeTextFile('employees.json', '[]', { dir: DATA_PATH })
      await fs.writeTextFile('appends.json', '[]', { dir: DATA_PATH })
      set({ isLoading: false, isError: true, error: error as unknown })
      setTimeout(() => {
        set({ isError: false, error: null })
        useStore.getState().init() // check again
      }, 3000)
    }
  }
}))


useStore.subscribe((state) => {
  console.log('useStore', state)
})