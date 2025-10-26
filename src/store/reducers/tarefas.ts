import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enum/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Terminar projeto 5',
      'concluir o projeto 5 do curso Fullstack pyton da EBAC',
      enums.prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      1
    ),
    new Tarefa(
      'Pagar a conta de Luz',
      'pagar a conta de energia',
      enums.prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      2
    ),
    new Tarefa(
      'Finalizar a parte front-end',
      'concluir a parte front-end do curso Fullstack pyton da EBAC',
      enums.prioridade.NORMAL,
      enums.Status.PENDENTE,
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
