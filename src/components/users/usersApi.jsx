import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import {getUsers} from "../../redux/thunk";

const UsersApi = () => {
    const dispatch = useDispatch();
    const totalUsersCount = useSelector((state) => state.usersPages.totalCount);
    const pageSize = useSelector((state) => state.usersPages.pageSize);
    const currentPage = useSelector((state) => state.usersPages.currentPage);
    const isFetchingState = useSelector((state) => state.usersPages.isFetching);
    const followingInProgress = useSelector((state) => state.usersPages.followingInProgress);

    useEffect(() => {
        dispatch(getUsers());
    }, [currentPage, pageSize, dispatch]);



    return isFetchingState ? (
        <Preloader />
    ) : (
        <Users
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            followingInProgress={followingInProgress}
        />
    );
};

export default UsersApi;
