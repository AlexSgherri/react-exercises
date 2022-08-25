import React from "react";

export class Welcome extends React.Component{
    static defaultProps = {
        name : "Alessandro",
        age: "not specified"
    }
    render(){
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}