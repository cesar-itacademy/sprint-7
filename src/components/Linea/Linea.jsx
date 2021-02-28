import styled from 'styled-components'

const StyledLinea = styled.h3 `
  background-color: #282c34;
   color: white;
   text-align: center;
  `

const Linea = (props) => {
    return (
    <>
        <StyledLinea>{props.fraseItem}</StyledLinea>
    </>
    );
}

export default Linea