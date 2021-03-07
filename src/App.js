import React, { useState, useEffect } from 'react';
import {generate as id} from 'shortid'

//Crear un id por cada elemento del array
//import { generate as id  } from "shortid";

//Componentes
import Linea from './components/Linea/index.js';
import Boton from './components/boton';

//StyledComponents 
import { GlobalStyle, StyledBox } from './application/GlobalStyles';



//Componente de clase
const App = () =>  {
   //Inicializamos estado del componente
  const [text, setText] = useState([]);
  const [indexItem, setIndex] = useState(0);
 
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
    if (indexItem < (text.length - 1))
     setIndex(indexItem + 1)
  }

  const handlerIndexPrevious = () => {
    if (indexItem > 0) setIndex(indexItem - 1)
  }

  //Renderizamos el componente Linea con los textos del JSON
  const obraTeatre = text.map((frase, index) => {
    let selected
    index ===indexItem ? selected= true : selected = false
    return <Linea fraseItem={frase} key={id()} selected={selected} bgcolor='#4acd4b' />
  }
  )
    
      return (
      <>
        <GlobalStyle />
          <Boton title='<< Enrera' onClick={handlerIndexPrevious} />
          <Boton title='Endavant >>' onClick={handlerIndexNext}  />
          <StyledBox>
              {obraTeatre}
          </StyledBox>
      </>
    );
  }


export default App
