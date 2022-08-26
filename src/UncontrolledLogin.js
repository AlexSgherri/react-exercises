import React from "react";

export class UncontrolledLogin extends React.Component {
  formSubmitHandler = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    this.props.passingFunction({username, password, remember})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <input name="username" type="username" />
          <br></br>
          <input name="password" type="password" />
          <br></br>
          <input name="remember" type="checkbox" />
          <br></br>
          <button name="button" type="submit">
            Login
          </button>
          <button type="reset" name="reset">
            Reset
          </button>
        </form>
      </div>
    );
  }
}
