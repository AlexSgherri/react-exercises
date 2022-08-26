import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return (
        <div>
            <Hello /> 
            <Welcome name="John" />
            <Counter initialValue={2} incrementAmount={3} incrementInterval={300} />
            <ClickCounter />
            <ClickTracker />
            <InteractiveWelcome />
        </div>
        )
    }
}