import { configureStore } from '@reduxjs/toolkit'
import tarefareducer from './reducers/tarefas'

const Store = configureStore({
  reducer: {
    tarefas: tarefareducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store
