import {
    followingInProgress,
    followUser,
    isFetching, setAuthUserData, setStatus,
    setTotalCount,
    setUserProfile,
    setUsers,
    unfollowUser
} from "./actions";
import {
    followUserApi,
    getAuthUserApi,
    getProfileApi, getProfileStatusApi,
    getUsersApi,
    putProfileStatusApi,
    unfollowUserApi
} from "../api/api";
import {put} from "axios";

export const getUsers = () => async (dispatch, getState) => {
    const {currentPage, pageSize} = getState().usersPages;

    dispatch(isFetching(true));

    try {
        const data = await getUsersApi(currentPage, pageSize);
        if (data && data.items) {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        } else {
            console.error("Не удалось получить данные пользователей");
        }
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    } finally {
        dispatch(isFetching(false));
    }
};


export const handleFollowClick = (userId) => async (dispatch) => {
    dispatch(followingInProgress(true, userId));
    try {
        const data = await followUserApi(userId);
        if (data.resultCode === 0) {
            dispatch(followUser(userId));
        }
    } catch (error) {
        console.error("Follow error:", error);
    } finally {
        dispatch(followingInProgress(false, userId));
    }
};

export const handleUnfollowClick = (userId) => async (dispatch) => {
    dispatch(followingInProgress(true, userId));
    try {
        const data = await unfollowUserApi(userId);
        if (data.resultCode === 0) {
            dispatch(unfollowUser(userId));
        }
    } catch (error) {
        console.error("Unfollow error:", error);
    } finally {
        dispatch(followingInProgress(false, userId));
    }
};


export const getProfile = (userId) => async (dispatch) => {
    if (!userId) return;
    try {
        const data = await getProfileApi(userId);

        dispatch(setUserProfile(data));
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
};


export const getAuth = () => async (dispatch) => {
    try {
        const data = await getAuthUserApi();

        if (data.resultCode === 0) {
            dispatch(setAuthUserData({
                userId: data.data.id,
                email: data.data.email,
                login: data.data.login
            }));
        }
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
};


export const setUserStatus = (status) => async (dispatch) => {
    try {
        const data = await getProfileStatusApi(status);
        dispatch(setStatus(data));
    } catch (error) {
        console.error("Ошибка при получении статуса:", error);
    }
};
export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const data = await putProfileStatusApi(status);

        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        } else {
            alert("300 символов");
        }
    } catch (error) {
        console.error("Ошибка сети при обновлении статуса:", error);
    }
};
