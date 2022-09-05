import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const {data, error, loading, fetchGithubUser} = useGithubUser(username)
  
  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);


  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {data && (
        <>
          <h1>{data.name}</h1>
          <ul>
            <li>Login : {data.login}</li>
            <li>Bio : {data.bio}</li>
            <li>Repositories : {data.public_repos}</li>
            <li>Followers : {data.followers}</li>
          </ul>
        </>
      )}
      {error && <h1>Failed to fetch</h1>}
    </div>
  );
}
