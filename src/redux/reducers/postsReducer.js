import { ADD_POST, DELETE_POST, EDIT_POST, SET_ALL_POSTS, MAKE_NEW_POST, NEW_POST, DETAIL_POST, LIKE_POST, UPDATE_POST } from "../types/postTypes";

export const postsReducer = (store = [], action) => {
    switch (action.type) {
        case SET_ALL_POSTS:
        return action.payload
        case MAKE_NEW_POST:
            return [...store, 
            action.payload]
        case DETAIL_POST:
            return [...store, action.payload]
        case ADD_POST:
            return action.payload
        case LIKE_POST:
            return store.map((post) => {
				if(post._id === action.payload._id) return action.payload
				return post
            })
            case DELETE_POST:
                return store.filter((post) => post._id !== action.payload)

            case EDIT_POST:
                return store.map((post) => {
                    if (post.id === action.payload.id) {
                        return action.payload
                    }
                    return post
                })
                case NEW_POST:
                    return [...store, action.payload]
                    case UPDATE_POST:
			return store.map((post)=> {
				if(post._id === action.payload._id) {
					return action.ayload
				}
				return post
			})
        default:
        return store
    }
}