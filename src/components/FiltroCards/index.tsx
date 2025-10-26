import * as style from './style'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCards = ({ ativo, legenda, contador }: Props) => (
  <style.Card ativo={ativo}>
    <style.Contador>{contador}</style.Contador>
    <style.Label>{legenda}</style.Label>
  </style.Card>
)

export default FiltroCards
