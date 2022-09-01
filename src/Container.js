import React from "react";

export class Container extends React.Component{

    render(){
        return (
            <div className="bg-red">
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}