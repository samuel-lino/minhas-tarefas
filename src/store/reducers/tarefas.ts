import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enum/tarefa'

type TarefasState = {
  itens: Tarefa[]
}
const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Terminar projeto 5',
      descricao: 'concluir o projeto 5 do curso Fullstack pyton da EBAC',
      prioridade: enums.prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Pagar a conta de Luz',
      descricao: 'pagar a conta de energia',
      prioridade: enums.prioridade.URGENTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      titulo: 'Finalizar a parte front-end',
      descricao: 'concluir a parte front-end do curso Fullstack pyton da EBAC',
      prioridade: enums.prioridade.NORMAL,
      status: enums.Status.PENDENTE
    }
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
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com este nome!')
      } else {
        const ultimatarefa = state.itens[state.itens.length - 1]
        const novaTarefa = {
          ...action.payload,
          id: ultimatarefa ? ultimatarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const tarefaid = state.itens.findIndex((t) => t.id === action.payload.id)

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
