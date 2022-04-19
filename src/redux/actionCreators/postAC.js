/* eslint-disable no-unused-vars */
import { API_TOKEN } from "../../constants/constans"
import {  MAKE_NEW_POST,  SET_ALL_POSTS } from "../types/postTypes"
import axios from 'axios'

export const setAllPosts = (allPosts) => ({
    type: SET_ALL_POSTS,
    payload: allPosts
})
export const loadAllPosts = (filterValue) => async (dispatch) => {
  const urlForFetch = filterValue
   ? `https://api.react-learning.ru/posts/search/?query=${filterValue}` 
   : "https://api.react-learning.ru/posts"
  
const response = await axios.get('https://api.react-learning.ru/posts/search/', {
     params: {
    query: filterValue
    },
    headers: {
    authorization: `Bearer ${API_TOKEN}`
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
    const response = await axios.post('https://api.react-learning.ru/posts', bodyObject, {  
headers: {
          authorization: `Bearer ${API_TOKEN}`,
    }
            })

      const postFromApi = await response.json()
      dispatch(setAllPosts(postFromApi))
}

