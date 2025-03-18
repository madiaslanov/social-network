import React from "react";
import st from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ userData }) => {
  return (
      <header className={st.header}>
        <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="Logo" />
        <div className={st.loginBlock}>
          {userData.isAuth ? (
              <span>{userData.login}</span>
          ) : (
              <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </header>
  );
};

export default Header;
