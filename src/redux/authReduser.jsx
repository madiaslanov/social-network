let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                userId: action.userData.userId,
                email: action.userData.email,
                login: action.userData.login,
                isAuth: true
            };
        default:
            return state;
    }
};

export default authReducer;
