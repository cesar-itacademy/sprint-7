import React, { Component } from 'react'

//CSS
import './App.css'

//Crear un id por cada elemento del array
import { generate as id  } from "shortid";

//Componentes
import Linea from './components/Linea'

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
      <div className="App">
        <div className="App-header">
          <h1>Textos de teatre: Romeo i Julieta</h1>
            {obraTeatro.map(frase => (
                <Linea fraseItem={frase} key={id()} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;