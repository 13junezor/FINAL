import {  DELETE_POST,  SET_ALL_POSTS,  LIKE_POST, ADD_NEW_POST, COM_MENT,  } from "../types/postTypes";

export const postsReducer = (state = [], action) => {

	switch (action.type) {
		case SET_ALL_POSTS:
			return action.payload
		
		case ADD_NEW_POST: 
			return [
				...state,
				action.payload
			]
		case DELETE_POST:
			return state.filter((post) => post._id !== action.payload)
			
		case LIKE_POST:
			return state.map((post) => {
				if(post._id === action.payload._id) return action.payload
				return post
			})
		case COM_MENT:
			return [
				...state,
				action.payload
			]
		
	
		default:
			return state
	}
}

