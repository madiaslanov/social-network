import React from "react";
import style from "./users.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import Description from "./description/description";
import {handleFollowClick, handleUnfollowClick} from "../../redux/thunk";

const Users = ({ totalUsersCount, pageSize, currentPage, followingInProgress }) => {
    const dispatch = useDispatch();
    const usersList = useSelector((state) => state.usersPages.usersData);
    const usersCount = Math.ceil(totalUsersCount / pageSize);
    const handlePageChange = (pageNum) => {
        dispatch(setCurrentPage(pageNum));
    };

    return (
        <div className={style.container}>
            <div className={style.pagination}>
                {Array.from({ length: usersCount }, (_, i) => i + 1).map((p) =>
                    (p === 1 || p === usersCount || (p >= currentPage - 2 && p <= currentPage + 2)) ? (
                        <span
                            key={p}
                            className={currentPage === p ? style.selectedPage : ""}
                            onClick={() => handlePageChange(p)}
                        >
                            {p}{" "}
                        </span>
                    ) : (p === currentPage - 3 || p === currentPage + 3) ? (
                        <span key={p}>... </span>
                    ) : null
                )}
            </div>
            {usersList.map((user) => (
                <Description
                    key={user.id}
                    user={user}
                    handleFollow={() => dispatch(handleFollowClick(user.id))}
                    handleUnfollow={() => dispatch(handleUnfollowClick(user.id))}
                    followingInProgress={followingInProgress}
                />
            ))}
        </div>
    );
};

export default Users;
