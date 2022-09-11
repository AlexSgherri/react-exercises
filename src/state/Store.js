import { counterReducer } from "./CounterState";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})

export const store = configureStore({ reducer : rootReducer})
