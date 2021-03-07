import React, { useState, useEffect } from 'react';

//Crear un id por cada elemento del array
//import { generate as id  } from "shortid";

//Componentes
import Linea from './components/linea';
import Boton from './components/boton';

//StyledComponents 
import { GlobalStyle, StyledBox } from './application/GlobalStyles';



//Componente de clase
const App = () =>  {
   //Inicializamos estado del componente
  const [text, setText] = useState([]);
  const [index, setIndex] = useState(0);
 
  //Petición HTTP para descarga de JSON en servidor online
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://my-json-server.typicode.com/cesar-itacademy/fake-json/teatre")
      const data = await response.json()
      setText(data)
    }
    getData()
  },[])


    //Actualizar estado del componente index para mostrar la frase siguiente o la anterior
  const handlerIndexNext = () => {
    if (index < (text.length - 1))
     setIndex(index + 1)
  }

  const handlerIndexPrevious = () => {
    if (index > 0) setIndex(index - 1)
  }

  //Renderizamos el componente Linea con los textos del JSON
      return (
      <>
        <GlobalStyle />
          <Boton title='<< Enrera' onClick={handlerIndexPrevious} />
          <Boton title='Endavant >>' onClick={handlerIndexNext}  />
          <StyledBox>
              <Linea fraseItem={text[index]} />
          </StyledBox>
      </>
    );
  }


export default App;