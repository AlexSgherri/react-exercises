import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./Root";
import React from "react";
import { store } from "./state/Store";
import { decrementCounter, incrementCounter, resetCounter } from "./state/CounterState";

const app = <Root />
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(app);

store.subscribe(() => console.log(store.getState()))

store.dispatch(incrementCounter(2))
store.dispatch(resetCounter())
store.dispatch(decrementCounter(-5))

// dal console log si vede che è funzionante