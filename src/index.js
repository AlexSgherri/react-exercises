import {Hello} from "./Hello";
import ReactDOM from "react-dom";

const hello = <Hello />
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(hello)