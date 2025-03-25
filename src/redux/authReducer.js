let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    messages: [],
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};


export default authReducer;
