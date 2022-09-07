import { useControlledFormInput } from "./useControlledFormInput"
import React from "react";

export function Login(props) {
  const {formData, inputEventHandlers, resetStateHandler} = useControlledFormInput()

  const buttonBackground = {
    backgroundColor: formData.password.length < 8 ? "red" : "green",
    color: "white",
    borderRadius: "1rem",
    cursor: "pointer"
  };

  const callingOnLogin = () => {
    props.passingFunction(formData);
  };

  return (
    <div>
      <input
        name="username"
        onChange={inputEventHandlers}
        value={formData.username}
        type="username"
      />
      <br></br>
      <input
        name="password"
        onChange={inputEventHandlers}
        value={formData.password}
        type="password"
      />
      <br></br>
      <input
        name="remember"
        onChange={inputEventHandlers}
        checked={formData.remember}
        type="checkbox"
      />
      <br></br>
      <button
        onClick={callingOnLogin}
        name="button"
        disabled={formData.password !== "" && formData.username !== "" ? false : true}
        style={buttonBackground}
      >
        Login
      </button>
      <button onClick={resetStateHandler} name="reset">
        Reset
      </button>
    </div>
  );
}

// export class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//       remember: false,
//       disable: true,
//     };
//   }

//   inputEventHandlers = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const type = event.target.type;
//     const checked = event.target.checked;

//     this.setState(
//       {
//         [name]: type === "checkbox" ? checked : value,
//       },
//       () =>
//         this.setState({
//           disable:
//             this.state.password !== "" && this.state.username !== ""
//               ? false
//               : true,
//         })
//     );
//   };

//   callingOnLogin = () => {
//     this.props.passingFunction(this.state);
//   };

//   resetStateHandler = () => {
//     this.setState({
//       username: "",
//       password: "",
//       remember: false,
//       disable: true,
//     });
//   };

//   render() {
//     const buttonBackground = {
//       backgroundColor: this.state.password.length < 8 ? "red" : "green",
//       color: "white",
//     };

//     return (
//       <div>
//         <input
//           name="username"
//           onChange={this.inputEventHandlers}
//           value={this.state.username}
//           type="username"
//         />
//         <br></br>
//         <input
//           name="password"
//           onChange={this.inputEventHandlers}
//           value={this.state.password}
//           type="password"
//         />
//         <br></br>
//         <input
//           name="remember"
//           onChange={this.inputEventHandlers}
//           checked={this.state.remember}
//           type="checkbox"
//         />
//         <br></br>
//         <button
//           onClick={this.callingOnLogin}
//           name="button"
//           disabled={this.state.disable}
//           style={buttonBackground}
//         >
//           Login
//         </button>
//         <button onClick={this.resetStateHandler} name="reset">
//           Reset
//         </button>
//       </div>
//     );
//   }
// }
