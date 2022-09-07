import { useState } from "react";
import { GithubUser } from "./GithubUser";
import React from "react";

export function GithubUserList({ users }) {
  const [usersList, setUsers] = useState(users);
  const [usernameInput, setUsernameInput] = useState("");

  function usernameInputHandler(event) {
    setUsernameInput(event.target.value);
  }

  function insertUsername() {
    if (usernameInput !== "" && usersList.some( element => element === "AlexSgherri")) {
      const newUserList = [...usersList, usernameInput];
      setUsers(newUserList);
    }
    setUsernameInput("")

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
            <GithubUser username={element} />
          </li>
        ))}
      </ul>
    </>
  );
}
