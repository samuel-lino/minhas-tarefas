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
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com este nome!')
      } else {
        state.itens.push(action.payload)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const tarefaid = state.itens.findIndex((t) => t.id === action.payload.id)
      console.log(action.payload.id)

      if (tarefaid >= 0) {
        state.itens[tarefaid].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, salvar, cadastrar, alterarStatus } =
  tarefasSlice.actions
export default tarefasSlice.reducer
