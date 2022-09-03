import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(user) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const json = await response.json();

      setData(json);
      console.log(data);
    } catch (error) {
      setError(error);
      setData(null);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

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
            <li>Bio : {data.bio}</li>
            <li>Repositories : {data.public_repos}</li>
            <li>Followers : {data.followers}</li>
          </ul>
        </>
      )}
    </div>
  );
}
