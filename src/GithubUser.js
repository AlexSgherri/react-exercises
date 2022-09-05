import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const {data, error, loading} = useGithubUser(username)

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
      {error && <p>Failed to fetch</p>}
    </div>
  );
}
