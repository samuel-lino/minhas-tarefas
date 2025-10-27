import { useSelector } from 'react-redux'
import Tarefa from '../../components/tarefa'
import { Container } from './style'
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

  return (
    <Container>
      <p>
        {filtrarTarefas().length} tarefas marcadas como &ldquo;
        {valor.charAt(0).toUpperCase() + valor.slice(1)}&rdquo; e &ldquo;{termo}
        &rdquo;.
      </p>
      <ul>
        {filtrarTarefas().map((t) => (
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
