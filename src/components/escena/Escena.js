import './escena.css';
import { BordeFrase } from '../../styled';
export const Escena = (props) => {
    
    const num = props.num
    const frases = (props.f).map((frase, index) => 
        <p key={index} className={`${index === num ? "selected": ""}`}>
            {frase}
        </p>
    )

    return (
        
           <BordeFrase>
              {frases}
           </BordeFrase>
        
    );
}