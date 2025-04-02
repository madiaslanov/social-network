import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {formReducer} from "./formReducer";
import appReducer from "./appReducer";
import musicReducer from "./musicReducer";
import newsReduser from "./newsReduser";

let rootReducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogReducer,
    sidebarPages: sidebarReducer,
    usersPages: usersReducer,
    auth: authReducer,
    form : formReducer,
    app : appReducer,
    musicPages : musicReducer,
    newsPages : newsReduser
});

export default rootReducer;