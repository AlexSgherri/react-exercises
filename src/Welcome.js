import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    static defaultProps = {
        name : "Alessandro",
        age: "not specified"
    }
    render(){
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                <Age age />  
            </div>
        )
    }
}

//la consegna dell'esercizio chiede solo l'esistenza, perciò se si inserisce solo age senza specificarne il contenuto o anche una stringa
//verrà stampato solo il messaggio senza una specifica età o la stringa
//la risoluzione sarebbe quella di mettere ad esempio un semplice - this.props.age >= 0 -