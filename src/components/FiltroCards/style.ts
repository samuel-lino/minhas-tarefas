import styled from 'styled-components'

export const Card = styled.div<{ $ativo: boolean }>`
  color: ${(props) => (props.$ativo ? '#1e90ff' : '#5e5e5e')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  border: 1px solid ${(props) => (props.$ativo ? '#1e90ff' : '#a1a1a1')};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
