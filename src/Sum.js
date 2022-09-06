import React from "react";

export function Sum( {numbers = [0]} ){
    return(
        <h1>Total: {numbers.reduce(( prev, acc )=> prev + acc, 0)}</h1>
    )

}

//se non viene fornita una prop adeguata andrà in errore l'applicazione