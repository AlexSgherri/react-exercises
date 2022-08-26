import React from "react";

export class Login extends React.Component{

    state = {
        username : "",
        password : "",
        remember: false
    }

    inputEventHandlers = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    render(){
        return (
            <div>
                <input name="username" onChange={this.inputEventHandlers} value={this.state.username} type="username" /><br></br>
                <input name="password" onChange={this.inputEventHandlers} value={this.state.password} type="password" /><br></br>
                <input name="remember" onChange={this.inputEventHandlers} checked={this.state.remember} type="checkbox" /><br></br>
            </div>                
        )
    }
}