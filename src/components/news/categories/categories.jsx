import React from "react";
import styles from './categories.module.css';
import {NavLink} from "react-router-dom";

const NewsCategories = () => {
    return (<div className={styles.categories}>
            {/*<ul>*/}
            {/*    <NavLink to="/news/general" className={({ isActive }) => isActive ? styles.active : ''} >*/}
            {/*        <li>*/}
            {/*            general*/}
            {/*        </li>*/}
            {/*    </NavLink>*/}

            {/*    <NavLink to="/news/business" className={({ isActive }) => isActive ? styles.active : '' }>*/}
            {/*        <li>*/}
            {/*            business*/}
            {/*        </li>*/}
            {/*    </NavLink>*/}
            {/*    <NavLink to="news/entertainment" className={({ isActive }) => isActive ? styles.active : '' }>*/}
            {/*        <li>*/}
            {/*            entertainment*/}
            {/*        </li>*/}
            {/*    </NavLink>*/}
            {/*    <NavLink to="news/health" className={({ isActive }) => isActive ? styles.active : '' }>*/}
            {/*        <li>*/}
            {/*            health*/}
            {/*        </li>*/}
            {/*    </NavLink>*/}
            {/*    <NavLink to="news/science" className={({ isActive }) => isActive ? styles.active : '' }>*/}
            {/*        <li>*/}
            {/*            science*/}
            {/*        </li>*/}
            {/*    </NavLink>*/}
            {/*    <NavLink to="news/sports" className={({ isActive }) => isActive ? styles.active : '' }>*/}
            {/*        <li>*/}
            {/*            sports*/}
            {/*        </li>*/}
            {/*    </NavLink>*/}
            {/*    <NavLink to="news/technology" className={({ isActive }) => isActive ? styles.active : '' }>*/}
            {/*        <li>*/}
            {/*            technology*/}
            {/*        </li>*/}
            {/*    </NavLink>*/}
            {/*</ul>*/}
        </div>
    );

}

export default NewsCategories;
