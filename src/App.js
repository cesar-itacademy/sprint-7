import React, { Component } from 'react'

//Crear un id por cada elemento del array
import { generate as id  } from "shortid";

//Componentes
import Linea from './components/linea'

//StyledComponents 
import { GlobalStyle, StyledBox } from './application/GlobalStyles'



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
      <>
        <GlobalStyle />
          <StyledBox>
              {obraTeatro.map(frase => (
                  <Linea fraseItem={frase} key={id()} />
              ))}
          </StyledBox>
      </>
    );
  }
}

export default App;