import { useState } from 'react'
import * as S from './style'
import * as enums from '../../utils/enum/tarefa'

type Props = {
  titulo: string
  prioridade: enums.prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaeditando, setEstaeditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraDeAcoes>
        {estaeditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaeditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaeditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Tarefa
