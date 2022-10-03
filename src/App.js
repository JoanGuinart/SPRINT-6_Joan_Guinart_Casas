import { useState } from "react";
import { Boton } from "./styled";
import { Escena } from "./components/escena/Escena";
import { frases } from "./data/frases";


const App = () => {

  const [numFrase, setNumFrase] = useState(0)

  const handleButton = (e, textoBoton) => {

    if (textoBoton === 'Siguiente' && numFrase >= 3) { 
      return alert('Estas en la última')
    }
    if (textoBoton === 'Anterior' && numFrase <= 0) {
      return alert('Estas en la primera')
    }
    if (textoBoton === 'Siguiente' && numFrase !== 3) {
      console.log(numFrase + 1);
      return setNumFrase(numFrase + 1);
    }
    if (textoBoton === 'Anterior' && numFrase !== 0) {
      console.log(numFrase - 1);
      return setNumFrase(numFrase - 1);
    }
  }


  return (
    <div>
      <Boton type="button" onClick={(e) => handleButton(e, "Anterior")}>Anterior</Boton>
      <Boton type="button" onClick={(e) => handleButton(e, "Siguiente")}>Siguiente</Boton>
      <Escena f={frases} num={numFrase}/>
    </div>
  );
}

export default App;
