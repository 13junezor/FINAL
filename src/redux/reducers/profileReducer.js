import { EDIT_PROFILE, UPDATE_AVATAR, UPDATE_PROFILE } from "../types/ProfileTypes"

export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                ...state,
                ...action.payload,
            }
       case UPDATE_PROFILE:
           return  action.payload
    case UPDATE_AVATAR:
        return action.payload
        default:
            return state
    }
}