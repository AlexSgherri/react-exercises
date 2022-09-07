import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import React from "react";

export function Counter({
  initialValue = 0,
  incrementInterval = 1000,
  incrementAmount = 1,
}) {
  const [counter, setCounter] = useState(initialValue);

  function incrementFunction() {
    console.log("I have mounted")
    setInterval(() => setCounter((c) => c + incrementAmount), incrementInterval);
    return () => {
      console.log("Unmounting");
    }
  }

  useEffect(incrementFunction, [incrementAmount, incrementInterval] );

  return <CounterDisplay stateAsAProp={counter} />;
}

// export class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: this.props.initialValue,
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => {
//         return {
//           count: state.count + this.props.incrementAmount,
//         };
//       });
//     }, this.props.incrementInterval);
//   }

//   render() {
//     return <CounterDisplay stateAsAProp={this.state.count} />;
//   }
// }

// Counter.defaultProps = {
//   initialValue: 0,
//   incrementInterval: 1000,
//   incrementAmount: 1,
// };
