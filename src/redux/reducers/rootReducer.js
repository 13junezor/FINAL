import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { personReducer } from "./personReducer";
import { postsReducer } from "./postsReducer";
import { profileReducer } from "./profileReducer";
import { postReducer } from './selectedPostReducer'
const rootReducer = combineReducers({
    posts: postsReducer,
	search: filterReducer,
	person: personReducer,
    post: postReducer,
    profile: profileReducer,
})
export default rootReducer