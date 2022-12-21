import { configureStore } from '@reduxjs/toolkit'
import configSlice  from './slices/config'

export const store = configureStore({
  reducer: {
    app: configSlice
  },
})