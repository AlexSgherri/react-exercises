import { useState } from "react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList({ users }) {
  const [usersList, setUsers] = useState(users);
  const [usernameInput, setUsernameInput] = useState("");

  function usernameInputHandler(event) {
    setUsernameInput(event.target.value);
  }

  function insertUsername() {
    if (
      usernameInput !== "" &&
      usersList.some((element) => element === "AlexSgherri")
    ) {
      const newUserList = [...usersList, usernameInput];
      setUsers(newUserList);
    }
    setUsernameInput("");
  }

  return (
    <>
      <input
        name="username"
        onChange={usernameInputHandler}
        value={usernameInput}
      />
      <button onClick={insertUsername}>Insert</button>
      <ul>
        {usersList.map((element, index) => (
          <li key={index}>
            <Link to={"/users/" + element}>go to {element}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
