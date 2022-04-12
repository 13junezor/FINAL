import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import {  delPost } from "../../redux/actionCreators/postAC"
import './styles.css'
const Postitem = ({id,likes, title, text, img, tag, index}) => {
  const navigate = useNavigate()  
const dispatch = useDispatch()

const deleteHandler = () => dispatch(delPost(id))

 return (
   <>
        <div className="container post">
          <h1 className="media-heading">{index+1}. {title}</h1>
        
        <p>{text}</p>
        <div className="text-center">
       <img src={img} className="rounded pict" alt=""/>
        </div>
        <p>Тэги: {tag}</p>
        <p>Лайки: {likes}</p>
        <div className="d-flex justify-content-around">
     <button 
     onClick={() => {navigate(`/posts/${id}`)}}
     type="button" 
     className="btn btn-outline-info rding">
         Читать в отдельном окне
         </button>
        
     <button 
     onClick={deleteHandler}
     type="button" 
     className="btn btn-outline-danger dlting">
         Удалить
         </button>
         </div>
     </div>
     
     
         </>
)
}
export default Postitem