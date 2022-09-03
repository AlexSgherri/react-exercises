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
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";
import { GithubUser } from "./GithubUser";

export class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            language: 'en',
            counterVisible: true
        }
    }

    languageChangeHandler = (event) =>{
        this.setState({
            language: event.target.value
        })
    }

    counterFunction = (number) => {
        console.log(`The number is : ${number}`)
    }

    onLogin(state){
        console.log(state)
    }

    toggleCounter = () => {
        this.setState({counterVisible: !this.state.counterVisible})
    }

    render(){
        return (
        <Container title="React Exercises">
            <Hello /> 
            <Welcome name="John" />
            <GithubUser username="AlexSgherri" />
            {/* 
            <button onClick={this.toggleCounter} >Toggle Counter</button>
            {this.state.counterVisible && <Counter initialValue={2} incrementAmount={3} incrementInterval={500} />}
            <ClickCounter onCounterChange={this.counterFunction}/>
            <Login passingFunction={this.onLogin} />
            <Sum numbers={ [5, 7, 9, 12] } />
            <ClickTracker />
            <InteractiveWelcome />
            <UncontrolledLogin passingFunction={this.onLogin} />
            <TodoList render={(liElement, deleteFunction)=> {
                return (
                    <ul>
                        {liElement.map((element, index) => (
                            <li key={index}>
                            {element}
                            <button onClick={deleteFunction} value={index}>
                                Remove
                            </button>
                            </li>
                        ))}
                    </ul>
                )
            }} >
            </TodoList >
            <br></br>
            <select value={this.state.language} onChange={this.languageChangeHandler}>
                <option value="en">English</option>
                <option value="it">Italiano</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
                <DisplayLanguage />
            </LanguageContext.Provider> */}
        </Container>
        )
    }
}