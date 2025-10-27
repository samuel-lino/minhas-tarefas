import { useDispatch } from 'react-redux'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcoes, Opcao } from './style'
import { cadastrar } from '../../store/reducers/tarefas'
import { FormEvent, useState } from 'react'
import * as enums from '../../utils/enum/tarefa'
import Tarefa from '../../models/Tarefa'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setdescricao] = useState('')
  const [prioridade, setprioridade] = useState(enums.prioridade.NORMAL)
  const navigation = useNavigate()

  const cadastratrTarefa = (event: FormEvent) => {
    event.preventDefault()
    const tarefaACadastrar = new Tarefa(
      titulo,
      descricao,
      prioridade,
      enums.Status.PENDENTE,
      9
    )
    dispatch(cadastrar(tarefaACadastrar))
    navigation('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastratrTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          as="textarea"
          value={descricao}
          onChange={(evento) => setdescricao(evento.target.value)}
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                type="radio"
                value={prioridade}
                name="prioridade"
                id={prioridade}
                defaultChecked={prioridade === enums.prioridade.NORMAL}
                onChange={(evento) =>
                  setprioridade(evento.target.value as enums.prioridade)
                }
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
