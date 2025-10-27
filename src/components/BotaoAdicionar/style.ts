import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const LinkAdicionar = styled(Link)`
  font-size: 40px;
  text-decoration: none;
  display: block;
  width: 64px;
  height: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  text-align: center;
  border-radius: 50%;
  align-content: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
`
