import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { personReducer } from "./personReducer";
import { postsReducer } from "./postsReducer";

const rootReducer = combineReducers({
    post: postsReducer,
    search: filterReducer,
    person: personReducer
})
export default rootReducer