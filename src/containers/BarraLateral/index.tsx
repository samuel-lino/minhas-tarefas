import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCards'
import * as S from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtros'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Procurar
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCards contador={0} legenda="Pendentes" />
          <FiltroCards contador={0} legenda="Concluidas" />
          <FiltroCards contador={0} legenda="urgentes" />
          <FiltroCards contador={0} legenda="importantes" />
          <FiltroCards contador={0} legenda="normal" />
          <FiltroCards contador={0} legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
