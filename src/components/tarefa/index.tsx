import { useEffect, useState } from 'react'
import * as S from './style'
import { useDispatch } from 'react-redux'
import { remover, salvar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

export type Props = TarefaClass
const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const [estaeditando, setEstaeditando] = useState(false)
  const [descricao, setDescicao] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescicao(descricaoOriginal)
    }
  }, [descricaoOriginal])
  return (
    <S.Card id={String(id)}>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricao}
        disabled={!estaeditando}
        onChange={(evento) => {
          setDescicao(evento.target.value)
        }}
      />
      <S.BarraDeAcoes>
        {estaeditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(salvar({ descricao, prioridade, status, titulo, id }))
                setEstaeditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                setEstaeditando(false)
                setDescicao(descricaoOriginal)
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaeditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Tarefa
