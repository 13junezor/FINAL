import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { postsReducer } from "./postsReducer";

const rootReducer = combineReducers({
    post: postsReducer,
    search: filterReducer,
})
export default rootReducer