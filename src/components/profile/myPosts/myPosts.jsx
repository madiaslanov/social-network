import React from "react";
import Post from "./post/post";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from "react-hook-form";
import style from "./myPosts.module.css";
import {addPost} from "../../../redux/actions";

const MyPostsForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, reset, formState : {errors}} = useForm();

    const onSubmit = (values) => {
        console.log(values);
        if (values.newPost.trim()) {
            dispatch(addPost(values.newPost));
            reset();
        }
    }


    return (
        <div>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={style.input}
                type="text"
                placeholder="Enter new Post"
                {...register("newPost",
                    {
                        required: "Type something",
                    })}
            />
            {errors.newPost && <p className={style.error}>{errors.newPost.message}</p>}
            <button
                className={style.button}
                type="submit"
            >
                Add Post
            </button>
        </form>
            <MyPosts/>
        </div>
    );
};

const MyPosts = () => {
    
    
    const posts = useSelector((state) => state.profilePages.postsData);
    const postElement = posts.map((p) => <Post message={p.message} count={p.count} key={p.id} />);
    return (
        <div>
            <div>My post</div>
            {postElement}
        </div>
    )
}



export default MyPostsForm;
