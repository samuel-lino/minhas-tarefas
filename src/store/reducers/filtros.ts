import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enum/tarefa'

type filtroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor: enums.prioridade | enums.Status | 'todas'
}
const initialState: filtroState = {
  termo: '',
  criterio: 'todas',
  valor: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<filtroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
