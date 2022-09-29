import {BordeFrase} from "../../styled";

export const Escena = (props) => {

  const frases = (props.f).map(frase => 

    <div key={frase}>
      <BordeFrase>{frase}</BordeFrase>
    </div>

  );

  //{frases}
  return <div>{frases}</div>;
};
