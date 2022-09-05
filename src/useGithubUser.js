import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(user) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const json = await response.json();

      if (response.status !== 200) {
        setError(new Error());
        setData(null);
      } else {
        setData(json);
      }
    } catch (err) {
      setError(() => err);
      setData(null);

      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  return {
    data,
    error,
    loading,
  };
}
