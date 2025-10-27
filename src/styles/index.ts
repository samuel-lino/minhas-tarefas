import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/tarefa/style'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Campo = styled.input`
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #5e5e5e;
  padding: 8px;
  margin-bottom: 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
