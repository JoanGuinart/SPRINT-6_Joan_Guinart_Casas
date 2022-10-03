import { useState } from "react";
import { Boton } from "./styled";
import { Escena } from "./components/escena/Escena";
import { frases } from "./data/frases";


const App = () => {

  const [numFrase, setNumFrase] = useState(0)

/* al asignar useState a (0) ya le decimos de primeras que el valor state: numFrase se iguale por ahora a 0 y arranque desde ahí */

  console.log('numero de frase:', numFrase)
  console.log(setNumFrase)

  console.log('----', useState)

  const handleButton = (e, textoBoton) => {
    e.preventDefault()
// aqui solo hacemos if para saber cuando estamos al principio o al final
    if (textoBoton === 'Siguiente' && numFrase >= 3) { 
      return alert('Estas en la última')
    }
    if (textoBoton === 'Anterior' && numFrase <= 0) {
      return alert('Estas en la primera')
    }

// aqui se hace la logica de cuanto valor numerico tiene que avanzar al dar al boton siguiente
    if (textoBoton === 'Siguiente' && numFrase !== 3) {
      console.log(numFrase + 1);
      return setNumFrase(numFrase + 1);
    }

//aqui se hace la logica de cuanto valor numerico tiene que retroceder al dar al boton anterior
    if (textoBoton === 'Anterior' && numFrase !== 0) {
      console.log(numFrase - 1);
      return setNumFrase(numFrase - 1);
    }
  }


  return (
    <div>
      <Boton type="button" onClick={(e) => handleButton(e, "Anterior")}>Anterior</Boton>
      <Boton type="button" onClick={(e) => handleButton(e, "Siguiente")}>Siguiente</Boton>
      <Escena frases={frases} num={numFrase}/>
       
 {/* asi se haria si no tuvieramos escena en un componente separado:
 
    frases.map((element(frase), index) =>
    <p key={index} className = {'${index === numFrase ? "selected": ""}'})>
    {element(frase)}
    </p>
    return(
        <BordeFrase>
              {frases}
        </BordeFrase>
    );
     */}
    </div>
  );
}

export default App;
