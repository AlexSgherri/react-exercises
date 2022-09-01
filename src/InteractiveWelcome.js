import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  inputNameHandler = (event) => {
    const name = event.target.value;

    this.setState({
      name: name,
    });
  };

  render() {
    return (
      <>
        <label for="name">Inserisci il nome: </label>
        <input
          name="WelcomeName"
          onChange={this.inputNameHandler}
          value={this.state.name}
        />
        <Welcome name={this.state.name} />
      </>
    );
  }
}
