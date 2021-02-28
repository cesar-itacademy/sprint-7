import React, { Component } from 'react'
import styled from 'styled-components'

//Crear un id por cada elemento del array
import { generate as id  } from "shortid";

//Componentes
import Linea from './components/Linea/Linea'

//StyledComponents 
const StyledBody = styled.body `
  height: 100vh;
  background-image: url("http://sertorio.synology.me/images/romeo-julieta.svg");
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

const StyledBox = styled.section `
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
      <StyledBody>
        <StyledBox>
            {obraTeatro.map(frase => (
                <Linea fraseItem={frase} key={id()} />
            ))}
        </StyledBox>
      </StyledBody>
    );
  }
}

export default App;