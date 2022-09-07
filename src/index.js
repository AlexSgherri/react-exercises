import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./Root";
import React from "react";

const app = <Root />
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(app);