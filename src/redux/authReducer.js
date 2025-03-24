let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            console.log("Обновляем auth state:", action.payload);
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};


export default authReducer;
