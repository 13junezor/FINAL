import { EDIT_PROFILE } from "../types/ProfileTypes"

export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                ...state,
                ...action.payload,
            }
       
    

        default:
            return state
    }
}