import { combineReducers } from "redux";
import { movieReducer } from "./movieReducers";
import { userReducer } from "./userReducers";

export const rootReducer = combineReducers({
    usersArr: userReducer,
    moviesArr: movieReducer,
})