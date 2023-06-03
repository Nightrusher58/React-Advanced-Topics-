import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Hello Wale" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {" "}
      {user ? (
        <WelcomePage Uname={user} lg={logout} />
      ) : (
        <LogoutPage li={login} />
      )}
    </div>
  );
};

const WelcomePage = (props) => {
  return (
    <div>
      <h1>Hello there {props.Uname.name} </h1>
      <button type="button" onClick={props.lg}>
        log Out
      </button>
    </div>
  );
};

const LogoutPage = (props) => {
  return (
    <div>
      <h1>Enter your credentials</h1>
      <button type="button" onClick={props.li}>
        login
      </button>
    </div>
  );
};

export default UserChallenge;
