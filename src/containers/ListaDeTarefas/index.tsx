import { useSelector } from 'react-redux'
import Tarefa from '../../components/tarefa'
import { Container } from './style'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  return (
    <Container>
      <p>
        2 tarefas marcadas como &ldquo;categoria&rdquo; e &ldquo;termo&rdquo;.
      </p>
      <ul>
        {tarefas.map((t) => (
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
