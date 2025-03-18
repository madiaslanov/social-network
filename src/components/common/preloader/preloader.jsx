import style from "../../users/users.module.css";
import Loading from "../../users/img/loading.gif";
import React from "react";

let Preloader = () =>{

    return   (<>
       <img className={style.image} src={Loading} alt="Loading"/>
        </>)
}

export default Preloader;