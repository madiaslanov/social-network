import React from "react";
import style from './post.module.css';

const Post = (props) => {
    return <div className={style.post}>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s" alt="" />
        {props.message}
        <div>
            <button>Like <span>{props.count}</span></button>
        </div>
    </div>
}

export default Post;