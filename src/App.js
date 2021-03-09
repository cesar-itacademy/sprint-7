import React, { useState, useEffect } from "react";

//Componentes
import Linea from "./components/Linea/index.js";
import Boton from "./components/boton";
import getText from "./services/getText";

//StyledComponents
import { GlobalStyle, StyledBox } from "./application/GlobalStyles";

//Componente funcional con hooks
const App = () => {
  //Inicializamos estado del componente
  const [text, setText] = useState([]);
  const [indexItem, setIndex] = useState(0);

  //Petición HTTP para descarga de JSON en servidor online
  useEffect(() => {
    getText().then((textData) => setText(textData));
  }, []);

  //Actualizar estado del componente index para mostrar la frase siguiente o la anterior
  const handlerIndexNext = () => {
    if (indexItem < text.length - 1) setIndex(indexItem + 1);
  };

  const handlerIndexPrevious = () => {
    if (indexItem > 0) setIndex(indexItem - 1);
  };

  //Iteración del array generando los componentes Linea y sus props
  const obraTeatre = text.map((frase, index) => {
    let selected; //Pasar como prop el item seleccionado
    index === indexItem ? (selected = true) : (selected = false);
    return <Linea fraseItem={frase} key={index} selected={selected} />;
  });

  return (
    <>
      <GlobalStyle />
      <Boton title="<< Endarere" onClick={handlerIndexPrevious} />
      <Boton title="Endavant >>" onClick={handlerIndexNext} />
      <StyledBox>{obraTeatre}</StyledBox>
    </>
  );
};

export default App;
