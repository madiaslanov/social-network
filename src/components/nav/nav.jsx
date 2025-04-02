import React from "react";
import st from './nav.module.css';
import { NavLink } from 'react-router-dom';
import RecomendFriends from "./recomend/recomendFriends";
import {useSelector} from "react-redux";


const Nav = () => {

    const isAuth = useSelector((user) => user.auth.isAuth);
    return (
        (isAuth) ? (
        <nav className={st.nav}>
            <NavLink to="/profile" className={({ isActive }) => isActive ? st.active : ''}>Profile</NavLink>
            <NavLink to="/users" className={({ isActive }) => isActive ? st.active : ''}>Friends</NavLink>
            <NavLink to="/dialogs" className={({ isActive }) => isActive ? st.active : ''}>Dialogs</NavLink>
            <NavLink to="/news/general" className={({ isActive }) => isActive ? st.active : ''}>News</NavLink>
            <NavLink to="/music" className={({ isActive }) => isActive ? st.active : ''}>Music</NavLink>
            <NavLink to="/settings" className={({ isActive }) => isActive ? st.active : ''}>Settings</NavLink>
            <div>
                <RecomendFriends />
            </div>
        </nav>) : ''
    );
};

export default Nav;
