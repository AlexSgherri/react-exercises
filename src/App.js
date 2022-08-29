import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component{

    onLogin(state){
        console.log(state)
    }

    render(){
        return (
        <div>
            <Hello /> 
            <Welcome name="John" />
            <Counter initialValue={2} incrementAmount={3} incrementInterval={300} />
            <ClickCounter />
            <ClickTracker />
            <InteractiveWelcome />
            <Login passingFunction={this.onLogin} />
            <UncontrolledLogin passingFunction={this.onLogin} />
            <TodoList />
        </div>
        )
    }
}