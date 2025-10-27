import { useSelector } from 'react-redux'
import Tarefa from '../../components/tarefa'
import { Container, Inicio } from './style'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = tarefas
    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >=
          0
      )
    }
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) => tarefa.prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) => tarefa.status === valor
      )
    }
    return tarefasFiltradas
  }

  const tarefasVisiveis = filtrarTarefas()

  const nomeFiltro = () => {
    if (valor === 'todas') return valor.charAt(0).toUpperCase() + valor.slice(1)
    else
      return (
        criterio.charAt(0).toUpperCase() +
        criterio.slice(1) +
        ' = ' +
        valor.charAt(0).toUpperCase() +
        valor.slice(1)
      )
  }

  return (
    <Container>
      <Inicio>
        {tarefasVisiveis.length} tarefa(s) marcada(s) como &ldquo;
        {nomeFiltro()}
        &rdquo;{termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''}.
      </Inicio>
      <ul>
        {tarefasVisiveis.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
