import React, { useState } from "react";
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
import { GithubUserList } from "./GithubUserList";
import { CarDetails } from "./CarDetails";
import { FilteredList } from "./FilteredList";
import { Route, Routes } from "react-router-dom";

export function App() {
  const [language, setLanguage] = useState("en");

  function languageChangeHandler(event) {
    setLanguage(event.target.value);
  }

  function counterFunction(number) {
    console.log(`The number is : ${number}`);
  }

  function onLogin(state) {
    console.log(state);
  }

  //   function toggleCounter (){
  //     setState({ counterVisible: !state.counterVisible });
  //   };

  const peopleList = [
    {
      name: "Aldo",
      id: 0,
      age: 31,
    },
    {
      name: "Giovanni",
      id: 1,
      age: 15,
    },
    {
      name: "Giacomo",
      id: 2,
      age: 19,
    },
  ];

  return (
    <Container title="React Exercises">
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>

      {/* 
        <Hello />
        <FilteredList peopleList={peopleList} />
        <ClickCounter onCounterChange={counterFunction}/>
        <select
          value={language}
          onChange={languageChangeHandler}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
            <CarDetails initialData={{model : "Renault", year : 1998, color: "#000000"}}/>
            <GithubUser username="AlexSgherri" />
            <Login passingFunction={onLogin} />
            <GithubUserList users={['IvanFras98', 'AlexSgherri']} />
            <button onClick={toggleCounter} >Toggle Counter</button>
            {state.counterVisible && <Counter initialValue={2} incrementAmount={3} incrementInterval={500} />}
            <Sum numbers={ [5, 7, 9, 12] } />
            <ClickTracker />
            <InteractiveWelcome />
            <UncontrolledLogin passingFunction={onLogin} />
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

            */}
    </Container>
  );
}
