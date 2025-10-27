import { useSelector } from 'react-redux'
import Tarefa from '../../components/tarefa'
import { Container } from './style'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtrarTarefas = () => {
    return tarefas.filter(
      (tarefa) =>
        tarefa.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        {filtrarTarefas().length} tarefas marcadas como &ldquo;categoria&rdquo;
        e &ldquo;{termo}&rdquo;.
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
