import React from "react";
import style from './post.module.css';

const Post = (props) => {
    return <div className={style.postHolder}>
    <div className={style.post}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s" alt=""/>
        <span>Likes: <span>{props.count}</span></span>
        </div>
        <div className={style.text}>
            {props.message}
    </div>
    </div>
}

export default Post;