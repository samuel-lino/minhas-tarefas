import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enum/tarefa'

type TarefasState = {
  itens: Tarefa[]
}
const initialState: TarefasState = {
  itens: [
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
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    salvar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaid = state.itens.findIndex((t) => t.id === action.payload.id)

      if (tarefaid >= 0) {
        state.itens[tarefaid] = action.payload
      }
    }
  }
})

export const { remover, salvar } = tarefasSlice.actions
export default tarefasSlice.reducer
