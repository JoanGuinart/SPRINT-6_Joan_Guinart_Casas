import { Escena } from "./components/escena/Escena";
import { Botones } from "./components/escena/Botones";
import { frases } from "./data/frases";



const App = () => {
  return (
    <div>
      <Botones text="Anterior"/>
      <Botones text="Siguiente"/>
      <Escena f = {frases}/>
    </div>
  );
}

export default App;
