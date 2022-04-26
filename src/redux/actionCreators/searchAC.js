import { SET_SEARCH_VALUE } from "../types/filterTypes";

export const setSearchValue = (newSearchValue) => ({
    type: SET_SEARCH_VALUE,
    payload: newSearchValue
})