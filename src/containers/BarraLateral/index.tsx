import FiltroCards from '../../components/FiltroCards'
import * as S from './style'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Procurar type="text" placeholder="Buscar" />
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

export default BarraLateral
