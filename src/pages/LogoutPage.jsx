import React from "react";
import { useAuth } from "../auth";

function LogoutPage() {
  const { logout } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    f;
    logout();
  };

  return (
    <>
      <h1>LogoutPage</h1>
      <form onSubmit={handleSubmit}>
        <label>¿Seguro que quieres salir?</label>
        <button onClick={handleSubmit}>Salir</button>
      </form>
    </>
  );
}

export default LogoutPage;
