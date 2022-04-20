/* eslint-disable no-unused-vars */
import { API_TOKEN } from "../../constants/constans"
import {  MAKE_NEW_POST,  SET_ALL_POSTS } from "../types/postTypes"
import axios from 'axios'
import { axiosInstance } from "../../cfg/axios"

export const setAllPosts = (allPosts) => ({
    type: SET_ALL_POSTS,
    payload: allPosts
})
export const loadAllPosts = (filterValue) => async (dispatch) => {
  const urlForFetch = filterValue
   ? `https://api.react-learning.ru/posts/search/?query=${filterValue}` 
   : "https://api.react-learning.ru/posts"
  
const response = await axiosInstance.get('posts/search/', {
     params: {
    query: filterValue
    },
})

const postsFromApi = response.data

 dispatch(setAllPosts(postsFromApi))
}

export const makeNewPost = (allPosts) => ({
    type: MAKE_NEW_POST,
    payload: allPosts
})
export const queryNewPost = (post) => async (dispatch) => {
 const bodyObject = JSON.parse(post)
 const response = await axiosInstance.post('posts', bodyObject, {  
 })

 const postFromApi = response.data
 dispatch(makeNewPost(postFromApi))
}



