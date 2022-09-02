import React from "react";

export function Sum( {numbers} ){
    return(
        <h1>Total: {numbers.reduce(( prev, acc )=> prev + acc, 0)}</h1>
    )

}