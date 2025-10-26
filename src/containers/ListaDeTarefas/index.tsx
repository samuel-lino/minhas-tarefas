import Tarefa from '../../components/tarefa'
import { Container } from './style'

const tarefas = [
  {
    titulo: 'Terminar projeto 5',
    prioridade: 'Importante',
    status: 'Pendente',
    descricao: 'concluir o projeto 5 do curso Fullstack pyton da EBAC'
  },
  {
    titulo: 'Finalizar a parte front-end',
    prioridade: 'Importante',
    status: 'Pendente',
    descricao: 'concluir a parte front-end do curso Fullstack pyton da EBAC'
  },
  {
    titulo: 'Pagar a conta de Luz',
    prioridade: 'Urgente',
    status: 'Concluida',
    descricao: 'pagar a conta de energia'
  },
  {
    titulo: 'Pagar a internete',
    prioridade: 'Urgente',
    status: 'pendente',
    descricao: 'Pagar a conta de internete'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadas como &ldquo;categoria&rdquo; e &ldquo;termo&rdquo;.
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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

export default ListaDeTarefas
