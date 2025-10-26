import Tarefa from '../../components/tarefa'
import { Container } from './style'

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadas como &ldquo;categoria&rdquo; e &ldquo;termo&rdquo;.
    </p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
