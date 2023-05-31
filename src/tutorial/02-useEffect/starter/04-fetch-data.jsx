import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(url);
        const users = await data.json();
        console.log(users);
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>GitHub Users</h2>
      <div>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <ul className="users">
              <li key={id}>
                <h3>{login}</h3>
                <h5>{html_url}</h5>
                <img src={avatar_url}></img>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default FetchData;
