import { app } from '@tauri-apps/api'
import React from 'react'
import create from 'zustand'
import { persist } from 'zustand/middleware'
// import { writeTextFile, BaseDirectory, readTextFile, removeFile } from '@tauri-apps/api/fs';
// Write a text file to the `$APPDIR/app.conf` path


interface SettingsState {
  reactVersion: string
  appName:  string
  appVersion: string
  init: () => void
}

export const useSettingsStore = create<SettingsState>(
  (set, get) => ({
    reactVersion: React.version,
    appName: '',
    appVersion: '',
    init: async () => {
      const appName = await app.getName()
      const appVersion = await app.getVersion()
      const reactVersion = React.version
      set({ appName, appVersion, reactVersion })
    }
    })
  )




