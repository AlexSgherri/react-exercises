import { useEffect } from "react";
import { useClickCounter } from "./useClickCounter";

export function ClickCounter(props) {
  const {count, incrementValue, decerementValue, reset } = useClickCounter(0)

  useEffect(()=> props.onCounterChange(count), [count, props])

  return (
    <div>
      <h3>Click Counter: {count}</h3>
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decerementValue}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// export class ClickCounter extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }

//   incrementCounterHandler = () => {
//     this.setState((state) => {
//       return {
//         counter: state.counter + 1
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Click Counter: {this.state.counter}</h3>
//         <button onClick={this.incrementCounterHandler}>Increment</button>
//       </div>
//     );
//   }
// }
