/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useDebounce } from "../../hooks/useDebounce"
import { loadAllPosts } from "../../redux/actionCreators/postAC"
import { filterValue } from "../../redux/actionCreators/searchAC"
import Postitem from "../Postitem/Postitem"

const PostList = () => {
 const postos = useSelector(store => store.post)
const search = useSelector((store) => store.search)
 const filterHandler = (e) => {
   dispatch(filterValue(e.target.value.trim()))
 }
const dispatch = useDispatch()
console.log(postos[1])

const debouncedSearch = useDebounce(search, 500)

useEffect(() => {
  dispatch(loadAllPosts(debouncedSearch))
}, [debouncedSearch])

    return (
    <>
      <form className="search">
      <div >
       <input
       placeholder='Поиск постов по заголовку'
        type="text"
         className="form-control" 
         id="exampleInputPassword1" 
         onChange={filterHandler}
                    />
         </div>
    </form>
      <ul className='list-group'>
  {postos.map((postos, i) => (
    <Postitem key={postos._id}
          index={i} id={postos._id} 
          title={postos?.title}
          text={postos?.text} 
          img={postos?.image}
          tag={postos?.tags.join(' #')}
          likes={postos.likes?.length}
          author={postos.author?.name}
           />     
  ))}
  </ul>
  </>
  )
}
export default PostList