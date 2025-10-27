import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enum/tarefa'

type filtroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.prioridade | enums.Status
}
const initialState: filtroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer
