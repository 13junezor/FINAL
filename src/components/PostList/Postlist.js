/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAllPosts } from "../../redux/actionCreators/postAC"
import Postitem from "../Postitem/Postitem"

const PostList = () => {
 const postos = useSelector(store => store.post)
 const [search, setSearch] = useState('')
 /* const filteredPosts = postos.filter(post => {
     return post.tags.includes(search)
 }) */
 
const dispatch = useDispatch()
console.log(postos[0])
useEffect(() => {
dispatch(loadAllPosts())
}, [])

if (!postos.length) return <div> Нет постов!</div>

    return (
    <>
      <form className="search">
      <div >
       <input
       placeholder='Поиск по тегам'
        type="text"
         className="form-control" 
         id="exampleInputPassword1" 
         onChange={(e) => setSearch(e.target.value) }
         value={search}
            />
         </div>
    </form>
      <ul className='list-group'>
  {postos.map((postos, i) => (
    <Postitem key={postos.id}
          index={i} id={postos.id} 
          title={postos.title}
          text={postos.text} 
          img={postos.image}
          tag={postos.tags}
          likes={postos.likes.length}
          author={postos.author.name} />     
  ))}
  </ul>
  </>
  )
}
export default PostList