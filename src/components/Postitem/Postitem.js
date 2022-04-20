import React from "react"

import { useNavigate } from "react-router-dom"


import './styles.css'
const Postitem = ({id,likes,comments, author, title, text, img, tag, index}) => {
  const navigate = useNavigate()  

const descript = text.length > 200 ? text.slice(0,200) + '...' : text


 return (
   <>
        <div className="container post">
          <h1 className="media-heading">{index+1}. {title}</h1>
          <p>Автор: {author}</p>
        <p>{descript}</p>
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
     // onClick={deleteHandler}
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