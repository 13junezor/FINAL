import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { personReducer } from "./personReducer";
import { postsReducer } from "./postsReducer";
import { postReducer } from './selectedPostReducer'
const rootReducer = combineReducers({
    posts: postsReducer,
	search: filterReducer,
	person: personReducer,
    post: postReducer,
})
export default rootReducer