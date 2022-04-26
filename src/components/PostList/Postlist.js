/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useDebounce } from "../../hooks/useDebounce"
import { loadAllPosts } from "../../redux/actionCreators/postAC"
import {  setSearchValue } from "../../redux/actionCreators/searchAC"
import Postitem from "../Postitem/Postitem"
import style from "./style.module.css";

const PostList = () => {
  const dispatch = useDispatch()
 const posts = useSelector((store) => store.posts)
 const person = useSelector((store) => store.person);
const search = useSelector((store) => store.search)
 const filterHandler = (e) => {
   dispatch(setSearchValue(e.target.value.trim()))
 }
 const debouncedSearch = useDebounce(search, 500)
useEffect(() => {
  dispatch(loadAllPosts(debouncedSearch, person.token));
}, [debouncedSearch, dispatch, person.token]);

    return (
    <>
      
      <form className="search">
      <div >
       <input
       placeholder='Поиск открыток по заголовку'
        type="text"
         className="form-control" 
         id="postcard__item_title" 
         onChange={filterHandler}
                    />
         </div>
         
    </form>
 
    <div className={style.postlist__wrapper}>
    {posts.map((post, i) => {
        return <Postitem key={post._id} index={i}{...post} />;
      })}
  </div>
  
 
  </>
  )
}
export default PostList