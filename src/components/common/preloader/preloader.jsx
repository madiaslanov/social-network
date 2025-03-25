import style from "./preloader.module.css";
import preloader from "../../users/img/preloader.gif";
import React from "react";

let Preloader = () =>{

    return   (<>
       <img className={style.image} src={preloader} alt="Loading"/>
        </>)
}

export default Preloader;