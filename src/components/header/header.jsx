import React from "react";
import st from "./header.module.css";
import { NavLink } from "react-router-dom";
import {logout} from "../../redux/thunk";

const Header = ({ userData, logOutUser }) => {
  return (
      <header className={st.header}>
        <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="Logo" />
        <div className={st.loginBlock}>
          {userData.isAuth ? (<div >
              <span className={st.span}>{userData.login}</span>
              <button onClick={logOutUser}>Log Out</button>
              </div>
          ) : (
              <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </header>
  );
};

export default Header;
