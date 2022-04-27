import { COM_MENT } from "../types/postTypes";

export const commentReducer = (state = {}, action) => {

	switch (action.type) {
		
		case COM_MENT:
			return [
				...state,
				action.payload
			]
		
		default:
			return state
	}
}

