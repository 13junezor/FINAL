/* eslint-disable no-restricted-globals */

import React from "react"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom"
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { deletePostQuery } from "../../redux/actionCreators/postAC";
import { deleteLikeQuery, setLikeQuery } from "../../redux/actionCreators/likeAC";


const Postitem = ({index, image,author,title,text,tags,likes,_id, comments, isAut}) => {
  const navigate = useNavigate()  
  const person = useSelector((store) => store.person)

const descript = text?.length > 200 ? text.slice(0,200) + '...' : text
const dispatch = useDispatch()
const deleteHandler = () => {

  let result = confirm("Вы точно хотите удалить пост?");
  if (result === true) {
    dispatch(deletePostQuery(_id, person.token));
  }
};

let pop = ''
let del = <></>
  if (author._id === person._id) {
    pop = 'Ваш пост'
 del = <button 
onClick={deleteHandler}
type="button" 
className="btn btn-outline-danger dlting">
    Удалить
    </button>
 }


const likeHandler = () => {
  console.log(person._id )
    if (!likes.includes(person._id)) {
    dispatch(setLikeQuery(_id, person.token));
  } else {
    dispatch(deleteLikeQuery(_id, person.token));
  }
};

 return (
   <>
        <div className="container post">
        <div className="media-heading"><strong>{index+1}. {title}</strong> </div>
        <div> Автор: {author?.name} </div>
        <div> Автор: {pop} </div>
        <div className="text-center">
       <img src={image} className="rounded pict" alt="img"/>
        </div>
        <div className="card__desc">
        <div><strong>{author?.name}:</strong>{descript}</div>
        <div>#{tags}</div>
        
        <div>
          <IconButton aria-label="add to favorites" onClick={likeHandler}>
            <FavoriteIcon />
          </IconButton>
         {likes?.length} Комментариев: {comments?.length}
        </div>
       
        </div>
        
        
        <div className="d-flex justify-content-around">
     <button 
     onClick={() => {navigate(`/posts/${_id}`)}}
     type="button" 
     className="btn btn-outline-info rding">
         Рассмотреть
         </button>
        {del}
    
         </div>
     </div>   
         </>
)
}
export default Postitem