import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  function incrementCounterHandler() {
    setCount((counter) => counter + 1);
  }

  return (
    <div>
      <h3>Click Counter: {count}</h3>
      <button onClick={incrementCounterHandler}>Increment</button>
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
