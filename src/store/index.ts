import { configureStore } from '@reduxjs/toolkit'
import tarefareducer from './reducers/tarefas'
import filtroreducer from './reducers/filtros'

const Store = configureStore({
  reducer: {
    tarefas: tarefareducer,
    filtro: filtroreducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store
