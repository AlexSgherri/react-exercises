import React from "react";

export class Container extends React.Component{

    render(){
        return (
            <div className="bg-red">
                {this.props.children}
            </div>
        )
    }
}