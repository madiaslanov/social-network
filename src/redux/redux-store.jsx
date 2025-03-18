import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReduser";
import {thunk} from "redux-thunk";

let store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
