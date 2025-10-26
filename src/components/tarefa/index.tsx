import * as S from './style'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>tarefa 1</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>urgente</S.Tag>
    <S.Descricao />
    <S.BarraDeAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraDeAcoes>
  </S.Card>
)

export default Tarefa
