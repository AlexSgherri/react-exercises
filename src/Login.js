import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    disable: true,
  };

  inputEventHandlers = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState(
      {
        [name]: type === "checkbox" ? checked : value,
      },
      () =>
        this.setState({
          disable:
            this.state.password !== "" && this.state.username !== ""
              ? false
              : true,
        })
    );
  };

  callingOnLogin = () => {
    this.props.passingFunction(this.state);
  };

  resetStateHandler = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
      disable: true,
    });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          onChange={this.inputEventHandlers}
          value={this.state.username}
          type="username"
        />
        <br></br>
        <input
          name="password"
          onChange={this.inputEventHandlers}
          value={this.state.password}
          type="password"
        />
        <br></br>
        <input
          name="remember"
          onChange={this.inputEventHandlers}
          checked={this.state.remember}
          type="checkbox"
        />
        <br></br>
        <button
          onClick={this.callingOnLogin}
          name="button"
          disabled={this.state.disable}
        >
          Login
        </button>
        <button onClick={this.resetStateHandler} name="reset">
          Reset
        </button>
      </div>
    );
  }
}
