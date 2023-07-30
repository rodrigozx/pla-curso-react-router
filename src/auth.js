import { createContext, useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = createContext();

const adminList = ["KevinBacon", "Drake", "Kanye", "IceCube"];

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    if (password !== username) return "Invalid password";

    const isAdmin = adminList.includes(username);
    setUser({ username, password, isAdmin });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function AuthRoute(props) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return props.children;
}

function useAuth() {
  const auth = useContext(AuthContext);
  if (auth === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return auth;
}

export { AuthProvider, AuthRoute, useAuth };
