import styled, {createGlobalStyle} from 'styled-components'
import imagenFondo from '../assets/img/romeo-y-julieta.svg'

export const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        background-image: url(${imagenFondo});
        background-position: center center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const StyledBox = styled.section `
  width: 20rem;
  height: 30rem;
  background-color: #282c34;
  opacity: 0.8;
  -webkit-box-shadow: 5px 7px 19px 16px rgba(0,0,0,0.84); 
  box-shadow: 5px 7px 19px 16px rgba(0,0,0,0.84);
  overflow: hidden;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
