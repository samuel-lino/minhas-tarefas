import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enum/tarefa'
import { Botao } from '../../styles'

type TagsProps = {
  $status?: string
  $prioridade?: string
  $parametro: 'status' | 'prioridade'
}

function retornarCorDeFundo(props: TagsProps): string {
  if (props.$parametro === 'prioridade') {
    if (props.$prioridade === enums.prioridade.URGENTE)
      return variaveis.vermelho
    if (props.$prioridade === enums.prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.$status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.$status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 36px;
  border-radius: 16px;

  label {
    display: flex;
    align-itens: center;
    margin-bottom: 16px;

    input {
      margin-right: 8px;
    }
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`

export const Tag = styled.span<TagsProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornarCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Descricao = styled.textarea`
  color: #8b8b8b;
  line-height: 24px;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  padding: 8px;
  border: none;
  background-color: transparent;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
