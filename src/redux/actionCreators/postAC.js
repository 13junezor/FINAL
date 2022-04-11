import {  DELETE_POST, NEW_POST } from "../types/postTypes"

export const addPostQuery = () => (dispatch) => {
    const LSPostKey = 'postos'
    const dataFromLs = localStorage.getItem(LSPostKey)
if (dataFromLs) {
JSON.parse(dataFromLs)
}
    console.log('hello', dataFromLs)
}
export const delPost = (id) => ({
    type: DELETE_POST,
    payload: id,
})

export const newPost = (title,text,img,tag) => ({
    type: NEW_POST,
    payload: {
        id: Date.now(),
        title,
        text,
        img,
        tag,
    }
})

export const newPostQuery = (id) => (dispatch) => {
    console.log('hello', delPost)
}