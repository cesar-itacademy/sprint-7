import React, { Component } from 'react';

//Crear un id por cada elemento del array
//import { generate as id  } from "shortid";

//Componentes
import Linea from './components/linea';
import Boton from './components/boton';

//StyledComponents 
import { GlobalStyle, StyledBox } from './application/GlobalStyles';



//Componente de clase
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:[],
      index: 0
    }; //Inicializamos estado del componente
  }

  //Petición HTTP para descarga de JSON en servidor online
  async componentDidMount() {
    const response = await fetch("http://my-json-server.typicode.com/cesar-itacademy/fake-json/teatre");
    const data = await response.json();
    this.setState({text:data}); //Pasamos data como text al estado del componente
  }

  //Actualizar estado del componente index para mostrar la frase siguiente o la anterior
  handlerIndexNext = () => {
    if (this.state.index < (this.state.text.length - 1))
     this.setState({index: this.state.index + 1})
  }

  handlerIndexPrevious = () => {
    if (this.state.index > 0)
    this.setState({index: this.state.index - 1})
  }

  //Renderizamos el componente Linea con los textos del JSON
  render() {
    const obraTeatro = this.state.text;
    return (
      <>
        <GlobalStyle />
          <Boton title='<< Enrera' onClick={this.handlerIndexPrevious} />
          <Boton title='Endavant >>' onClick={this.handlerIndexNext}  />
          <StyledBox>
              <Linea fraseItem={obraTeatro[this.state.index]} />
          </StyledBox>
      </>
    );
  }
}

export default App;