import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route, index) => {
          if (route.publicInly && auth.user) return null;
          if (route.private && !auth.user) return null;
          return (
            <li key={index}>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "red" } : { color: "blue" }
                }
                to={route.path}
                exact
              >
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({ path: "/", name: "Home", exact: true, private: false });
routes.push({ path: "/blog", name: "Blog", exact: true, private: false });
routes.push({ path: "/profile", name: "Profile", exact: true, private: true });
routes.push({
  path: "/login",
  name: "Login",
  exact: true,
  private: false,
  publicInly: true,
});
routes.push({ path: "/logout", name: "Logout", exact: true, private: true });

export default Menu;
