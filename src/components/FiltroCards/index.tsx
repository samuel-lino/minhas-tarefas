import { useDispatch, useSelector } from 'react-redux'
import * as style from './style'
import { alterarFiltro } from '../../store/reducers/filtros'
import * as enums from '../../utils/enum/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  criterio: 'prioridade' | 'status' | 'todas'
  valor: enums.Status | enums.prioridade | 'todas'
}

const FiltroCards = ({ criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const { filtro, tarefas } = useSelector((state: RootReducer) => state)
  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const verificarSeAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const ativo = verificarSeAtivo()

  let tarefasFiltradas = tarefas.itens
  const numDeTarefas = () => {
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter((t) => t.prioridade === valor)
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter((t) => t.status === valor)
    }
    return tarefasFiltradas.length
  }
  return (
    <style.Card ativo={ativo} onClick={filtrar}>
      <style.Contador>{numDeTarefas()}</style.Contador>
      <style.Label>
        {valor.charAt(0).toUpperCase() + valor.slice(1)}
      </style.Label>
    </style.Card>
  )
}

export default FiltroCards
