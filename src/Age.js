import React from "react";

export class Age extends React.Component{
    static defaultProps = {
        age: "not specified"
    }
    render(){
        return <p>Your age is {this.props.age}</p>
    }
}