import React, { Component } from 'react'
import styled from 'styled-components'

//Crear un id por cada elemento del array
import { generate as id  } from "shortid";

//Componentes
import Linea from './components/Linea/Linea'

//StyledComponents 
const StyledContainer = styled.div `
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("")
  `

const StyledBox = styled.section `
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  height: 30rem;
  border-radius: 3rem;
  border: 2px solid #2abd0c;
  background-color: #282c34;
  opacity: 5;
  -webkit-box-shadow: 5px 7px 19px 16px rgba(0,0,0,0.84); 
  box-shadow: 5px 7px 19px 16px rgba(0,0,0,0.84);
  overflow: hidden;
`

//Componente de clase
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text:[]}; //Inicializamos estado del componente
  }
  //Petición HTTP para descarga de JSON en servidor online
  async componentDidMount() {
    const response = await fetch("http://my-json-server.typicode.com/cesar-itacademy/fake-json/teatre")
    const data = await response.json()
    this.setState({text:data}) //Pasamos data como text al estado del componente
  }
  //Renderizamos el componente Linea con los textos del JSON
  render() {
    const obraTeatro = this.state.text 
    return (
      <StyledContainer>
        <StyledBox>
            {obraTeatro.map(frase => (
                <Linea fraseItem={frase} key={id()} />
            ))}
        </StyledBox>
      </StyledContainer>
    );
  }
}

export default App;