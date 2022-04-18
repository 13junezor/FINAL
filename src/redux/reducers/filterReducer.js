import { SET_SEARCH_VALUE } from "../types/filterTypes";

export const filterReducer = (state = '', action ) => {
switch (action.type) {
    case SET_SEARCH_VALUE:
        return action.payload
       

    default:
        return state
}
}