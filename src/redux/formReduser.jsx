const initialState = {
    login: "",
    password: "",
    rememberMe: false,
}


export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORM_DATA":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};