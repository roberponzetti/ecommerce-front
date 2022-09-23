import { configureStore } from '@reduxjs/toolkit'
import productReducer from './state/product'

export const store = configureStore({
  reducer: productReducer
})