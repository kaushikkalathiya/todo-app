import { useState, useEffect, use } from "react";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
	setLoading(true);
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			if(response.status !== 200) {
				setError(response.status);
			}
			return response.json()
		})
		.then((json) => {
			setUsers(json);
			setLoading(false);
		}).catch((err) => {
			setError(err);
			setLoading(false);
		});
  }, []);

  return { users, loading, error };
}

export default useUsers;