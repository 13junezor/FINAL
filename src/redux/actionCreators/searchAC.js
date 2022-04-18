import { SET_SEARCH_VALUE } from "../types/filterTypes";

export const filterValue = (newFilterValue) => ({
    type: SET_SEARCH_VALUE,
    payload: newFilterValue
})