import React from "react";

export class ClickCounter extends React.Component {
  state = {
    counter: 0,
  };

  incrementCounterHandler = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Click Counter: {this.state.counter}</h3>
        <button onClick={this.incrementCounterHandler}>Increment</button>
      </div>
    );
  }
}
