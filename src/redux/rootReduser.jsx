import {combineReducers} from "redux";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import {formReducer} from "./formReduser";

let rootReducer = combineReducers({
    profilePages: profileReduser,
    dialogsPages: dialogReduser,
    sidebarPages: sidebarReduser,
    usersPages: usersReduser,
    auth: authReduser,
    form : formReducer
});

export default rootReducer;