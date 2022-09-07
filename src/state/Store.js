import { counterReducer } from "./CounterState";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({ reducer : counterReducer})
