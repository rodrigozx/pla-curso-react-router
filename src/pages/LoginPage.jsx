import React from "react";
import { useState } from "react";
import { useAuth } from "../auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = login({ username, password });
    if (error) alert(error);
  };

  const onUserChange = ({ target: { value } }) => {
    setUsername(value);
  };

  const onPasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  if (user) return <Navigate to="/profile" />;

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={onUserChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={onPasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
