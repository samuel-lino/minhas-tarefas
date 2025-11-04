import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCards from '../../components/FiltroCards'
import * as S from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtros'
import * as enums from '../../utils/enum/tarefa'
import { Campo, Botao } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const termo = useSelector((state: RootReducer) => state.filtro.termo)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCards valor={enums.Status.PENDENTE} criterio="status" />
              <FiltroCards valor={enums.Status.CONCLUIDA} criterio="status" />
              <FiltroCards
                valor={enums.prioridade.URGENTE}
                criterio="prioridade"
              />
              <FiltroCards
                valor={enums.prioridade.IMPORTANTE}
                criterio="prioridade"
              />
              <FiltroCards
                valor={enums.prioridade.NORMAL}
                criterio="prioridade"
              />
              <FiltroCards criterio="todas" valor="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
