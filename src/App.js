import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {text: []};// Inicializamos el objeto text 
  }

  async componentDidMount() {
    // Petición HTTP servidor JSON asyncrono
    const resolve = await fetch("http://my-json-server.typicode.com/cesar-itacademy/fake-json/teatre")
    const data = await resolve.json()
    this.setState({text:data})// Guardamos el objeto data como text
  }

  render() {
    return (
      <div>
          <h1>Texts de teatre - Romeo i Julieta</h1>
      </div>
    );
  }
}

export default App;