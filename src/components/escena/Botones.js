export const Botones = (props) => {
  
  const textoBoton = props.text
  let fraseSelecionada = 0;

  const handleButton = (textoBoton) => {
    //e.preventDefault();
    if (textoBoton === 'Sigiente' && fraseSelecionada === 3) {
      alert('Estas en la última')
    }
    if (textoBoton === 'Anterior' && fraseSelecionada === 0) {
      alert('Estas en la primera')
    }
    if (textoBoton === 'Sigiente') {
      fraseSelecionada += 1;
    }
    if (textoBoton === 'Anterior') {
      fraseSelecionada -= 1;
    }
  }

  return (
    <button onClick={handleButton(textoBoton)}>{textoBoton}</button>
  )
}
