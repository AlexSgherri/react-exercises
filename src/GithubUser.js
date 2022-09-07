import { useGithubUser } from "./useGithubUser";
import React from "react";
import { useParams } from "react-router-dom";

export function GithubUser() {
  const { username } = useParams()
  const {user, error, loading, refreshData} = useGithubUser(username)
  
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {user && (
        <>
          <button onClick={refreshData}>Refresh</button>
          <h1>{user.name}</h1>
          <ul>
            <li>Login : {user.login}</li>
            <li>Bio : {user.bio}</li>
            <li>Repositories : {user.public_repos}</li>
            <li>Followers : {user.followers}</li>
          </ul>
        </>
      )}
      {error && <h1>Failed to fetch</h1>}
    </div>
  );
}
