import FiltroCards from '../../components/FiltroCards'
import * as S from './style'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Procurar type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCards />
        <FiltroCards />
        <FiltroCards />
        <FiltroCards />
        <FiltroCards />
        <FiltroCards />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
