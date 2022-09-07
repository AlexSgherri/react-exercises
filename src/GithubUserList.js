import { useState } from "react";
import { GithubUser } from "./GithubUser";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList({ users }) {
  const [usersList, setUsers] = useState(users);

  return (
    <>
      <ul>
        {usersList.map((element, index) => (
          <li key={index}>
            {/* <GithubUser username={element} /> */}
            <Link to={"/users/"+element}>go to {element}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
