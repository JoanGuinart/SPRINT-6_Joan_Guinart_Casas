import { Boton } from "./../../styled" 


export const Botones = (props) => {
  
   const textoBoton = props.text
  return (
    <Boton type="button">{textoBoton}</Boton>  
  )
}
