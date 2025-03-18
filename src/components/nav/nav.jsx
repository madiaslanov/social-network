import React from "react";
import st from './nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return <nav className={st.nav}>
        <div>
            <NavLink to="/profile" className={({isActive}) => isActive ? st.active : ''}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={({isActive}) => isActive ? st.active : ''}>Messages</NavLink></div>
        <div>
            <div>
                <NavLink to="/users" className={({isActive}) => isActive ? st.active : ''}>Users</NavLink></div>
            <NavLink to="/news" className={({isActive}) => isActive ? st.active : ''}>News</NavLink></div>
        <div>
            <NavLink to="/music" className={({isActive}) => isActive ? st.active : ''}>Music</NavLink></div>
        <div>
            <NavLink to="/settings" className={({isActive}) => isActive ? st.active : ''}>Settings</NavLink></div>

    </nav>
}

export default Nav;