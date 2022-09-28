

export const Escena = (props) => {

    const frases = (props.f).map(frase => 
       
        <p key={frase}>
            {frase}
        </p> 
    )



    //{frases}
    return (
        <div>
            {frases}
        </div>
    );
}