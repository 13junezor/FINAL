import { API_TOKEN } from "../../constants/constans"
import {  DELETE_POST, MAKE_NEW_POST, NEW_POST, SET_ALL_POSTS } from "../types/postTypes"

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
export const setAllPosts = (allPosts) => ({
    type: SET_ALL_POSTS,
    payload: allPosts
})
export const loadAllPosts = () => async (dispatch) => {
   const response = await fetch('https://api.react-learning.ru/posts', {
        headers: {
          authorization: `Bearer ${API_TOKEN}`
        }
      })
      const postsFromApi = await response.json()
      dispatch(setAllPosts(postsFromApi))
}

export const makeNewPost = (allPosts) => ({
    type: MAKE_NEW_POST,
    payload: allPosts
})
export const queryNewPost = (post) => async (dispatch) => {
   const response = await fetch('https://api.react-learning.ru/posts', {
   method: "POST",     
   headers: {
          authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: post
      })
      const postFromApi = await response.json()
      dispatch(setAllPosts(postFromApi))
}


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