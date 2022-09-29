import { Escena } from "./components/escena/Escena";
import { Botones } from "./components/escena/Botones";
import { frases } from "./data/frases";
/* import React, {useState, useEffect} from "react"; */




const App = () => { 


  return (
    <div>   
      <Botones text="Anterior"/>
      <Botones text="Siguiente"/>    
     
      <Escena
       f = {frases}/>
    
      
    </div>
  );
}

export default App;
