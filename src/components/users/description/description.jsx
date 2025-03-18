import React from "react";
import style from "./description.module.css";
import { NavLink } from "react-router-dom";

const Description = ({ user, handleFollow, handleUnfollow, followingInProgress }) => {
    const isFollowingInProgress = followingInProgress.includes(user.id);

    return (
        <div className={style.container}>
            <div className={style.leftSide}>
                <NavLink to={`/profile/${user.id}`}>
                    <img
                        className={style.smileImg}
                        src={user.photos.large || "https://media.gq.com/photos/627d37fbbad17dc46fce8158/4:3/w_2507,h_1880,c_limit/MCDAVAT_FE021.jpg"}
                        alt="User"
                    />
                </NavLink>
                {user.followed ? (
                    <button onClick={handleUnfollow} disabled={isFollowingInProgress}>
                        Unfollow
                    </button>
                ) : (
                    <button onClick={handleFollow} disabled={isFollowingInProgress}>
                        Follow
                    </button>
                )}
            </div>
            <div className={style.rightSide}>
                <div className={style.description}>
                    <h1>{user.name}</h1>
                    <p>{user.status}</p>
                </div>
            </div>
        </div>
    );
};

export default Description;
