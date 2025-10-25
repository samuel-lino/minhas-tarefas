import * as style from './style'

export type Props = {
  ativo?: boolean
}

const FiltroCards = (props: Props) => (
  <style.Card ativo={props.ativo}>
    <style.Contador>3</style.Contador>
    <style.Label>pendente</style.Label>
  </style.Card>
)

export default FiltroCards
