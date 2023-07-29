import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => {
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

        {/*
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

        {/* 
        <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        </li>
        <li>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        </li>
        <li>
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink> 
        </li>
        */}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({ path: "/", name: "Home", exact: true });
routes.push({ path: "/blog", name: "Blog", exact: true });
routes.push({ path: "/profile", name: "Profile", exact: true });
routes.push({ path: "/login", name: "Login", exact: true });
routes.push({ path: "/logout", name: "Logout", exact: true });

export default Menu;
