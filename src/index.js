import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./Root";
import React from "react";
import { store } from "./state/Store";
import { decrementCounter, incrementCounter, resetCounter } from "./state/CounterState";
import { addTodos, editTodos, removeTodos } from "./state/TodosReducer";

const app = <Root />
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(app);

store.subscribe(() => console.log(store.getState()))

store.dispatch(incrementCounter(2))
store.dispatch(addTodos({id: 0, title:"buy milk", completed: false}))
store.dispatch(resetCounter())
store.dispatch(addTodos({id: 1, title:"do homework", completed: true}))
store.dispatch(decrementCounter(-5))
store.dispatch(editTodos(0, {title: "practice React", completed: false}))
store.dispatch(removeTodos(1))

// dal console log si vede che è funzionante

// lo store era già in subscribe