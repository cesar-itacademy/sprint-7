import styled from 'styled-components'

export const StyledLinea = styled.h3 ` 
  color: white;
  text-align: center;
  //Si es la frase seleccionado cambiamos el color
  background-color: ${({selected}) => selected ? 'tomato' : null  }
`