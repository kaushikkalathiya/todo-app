import useUsers from "./hooks/use-users";

function Users() {
  const { users, loading, error } = useUsers();

  if(loading) { return <h1>Loading...</h1>; }
  if(error) { return <h1>Somthing want to do, Error: {error.message}</h1>; }

  return users.map((user) => 
    <h2>{user.name}</h2>
  );
}

export default Users;