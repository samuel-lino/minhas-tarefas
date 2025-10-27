import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCards'
import * as S from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtros'
import * as enums from '../../utils/enum/tarefa'

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
          <FiltroCards valor={enums.Status.PENDENTE} criterio="status" />
          <FiltroCards valor={enums.Status.CONCLUIDA} criterio="status" />
          <FiltroCards valor={enums.prioridade.URGENTE} criterio="prioridade" />
          <FiltroCards
            valor={enums.prioridade.IMPORTANTE}
            criterio="prioridade"
          />
          <FiltroCards valor={enums.prioridade.NORMAL} criterio="prioridade" />
          <FiltroCards criterio="todas" valor="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
