import {combineReducers} from "redux";
import profileReduser from "./profileReducer";
import dialogReduser from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReduser from "./usersReducer";
import authReduser from "./authReducer";
import {formReducer} from "./formReducer";
import appReducer from "./appReducer";

let rootReducer = combineReducers({
    profilePages: profileReduser,
    dialogsPages: dialogReduser,
    sidebarPages: sidebarReducer,
    usersPages: usersReduser,
    auth: authReduser,
    form : formReducer,
    app : appReducer,
});

export default rootReducer;