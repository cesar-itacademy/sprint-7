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
        justify-content: flex-start;
    }
`

export const StyledBox = styled.section `
  width: 20rem;
  height: auto;
  background-color: #282c34;
  opacity: 0.8;
  //-webkit-box-shadow: 5px 7px 19px 16px rgba(0,0,0,0.84); 
  //box-shadow: 5px 7px 19px 16px rgba(0,0,0,0.84);
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 6px 26px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 6px 26px rgba(0,0,0,0);
  overflow: hidden;
  display:flex;
  flex-direction: column;
  justify-content: center;
`
