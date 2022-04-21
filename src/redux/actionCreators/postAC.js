/* eslint-disable no-unused-vars */
import { API_TOKEN } from "../../constants/constans"
import {  DELETE_POST, MAKE_NEW_POST,  SET_ALL_POSTS, UPDATE_POST } from "../types/postTypes"
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

export const deletePost = (_id) => ({
	type: DELETE_POST,
	payload: _id
})
export const deletePostQuery = (_id, token) => async (dispatch) =>{
	
	const response= await fetch(`https://api.react-learning.ru/posts/${_id}`, {
		method: 'DELETE',
		headers: {
			authorization: `Bearer ${token}`
		} ,		
	})	
	if(response.status === 200) {		
		dispatch(deletePost(_id))
	}
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
export const updatePost = (updatePost) => ({
	type: UPDATE_POST,
	payload: updatePost,
}) 

export const updateNewPost = (post, token) => async (dispatch) => {

	const response = await fetch('https://api.react-learning.ru/posts', {
		method: "PATCH",
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
	
	})

	const postFromApi = await response.json()

	dispatch(updatePost(postFromApi))

}



