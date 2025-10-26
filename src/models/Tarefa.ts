import * as enums from '../utils/enum/tarefa'

class Tarefa {
  titulo: string
  descricao: string
  prioridade: enums.prioridade
  status: enums.Status
  id: number

  constructor(
    titulo: string,
    descricao: string,
    prioridade: enums.prioridade,
    status: enums.Status,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.id = id
    this.prioridade = prioridade
    this.status = status
  }
}

export default Tarefa
