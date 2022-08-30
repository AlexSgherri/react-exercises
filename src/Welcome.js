import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{

    render(){
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                { this.props.name === "John" && <Age age={17} /> }
            </div>
        )
    }
}

Welcome.defaultProps = {
    name : "Alessandro",
}