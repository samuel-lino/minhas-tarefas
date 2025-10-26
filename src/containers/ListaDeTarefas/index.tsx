import Tarefa from '../../components/tarefa'
import { Container } from './style'
import * as enums from '../../utils/enum/tarefa'

const tarefas = [
  {
    titulo: 'Terminar projeto 5',
    prioridade: enums.prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'concluir o projeto 5 do curso Fullstack pyton da EBAC'
  },
  {
    titulo: 'Finalizar a parte front-end',
    prioridade: enums.prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'concluir a parte front-end do curso Fullstack pyton da EBAC'
  },
  {
    titulo: 'Pagar a conta de Luz',
    prioridade: enums.prioridade.URGENTE,
    status: enums.Status.CONCLUIDA,
    descricao: 'pagar a conta de energia'
  },
  {
    titulo: 'Pagar a internete',
    prioridade: enums.prioridade.URGENTE,
    status: enums.Status.PENDENTE,
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
