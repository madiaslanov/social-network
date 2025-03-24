import {
    followingInProgress,
    followUser, initializedSuccess,
    isFetching, setAuthUserData, setInitializedSuccess, setStatus,
    setTotalCount,
    setUserProfile,
    setUsers,
    unfollowUser
} from "./actions";
import {
    followUserApi,
    getAuthUserApi,
    getProfileApi, getProfileStatusApi,
    getUsersApi, loginUserApi, logoutUserApi,
    putProfileStatusApi,
    unfollowUserApi
} from "../api/api";

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
                login: data.data.login,
                isAuth: true
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

export const login = (email, password, rememberMe) => async (dispatch) => {
    try {
        const data = await loginUserApi(email, password, rememberMe);
        console.log("Ответ сервера:", data);

        if (data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            console.error("Ошибка логина:", data.messages);
        }
    } catch (error) {
        console.error("Ошибка сети при логине:", error);
    }
};



export const logout = () => async (dispatch) => {
    try {
        const data = await logoutUserApi();
        console.log("Ответ сервера при выходе:", data);

        if (data.resultCode === 0) {
            dispatch(setAuthUserData({
                userId: null,
                email: null,
                login: null,
                isAuth: false
            }));
        }
    } catch (error) {
        console.error("Ошибка выхода:", error);
    }
};

export const initializedApp = () => async (dispatch) => {
    try {
        await dispatch(getAuth());
        dispatch(initializedSuccess(true));
    } catch (error) {
        console.error("Ошибка инициализации:", error);
        dispatch(initializedSuccess(false));
    }
};
