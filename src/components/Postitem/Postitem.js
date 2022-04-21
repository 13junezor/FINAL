/* eslint-disable no-restricted-globals */

import React from "react"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom"
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { deletePostQuery } from "../../redux/actionCreators/postAC";
import { deleteLikeQuery, setLikeQuery } from "../../redux/actionCreators/likeAC";
const Postitem = ({id,likes,comments,like, author, title, text, img, tag, index}) => {
  const navigate = useNavigate()  
  const person = useSelector((store) => store.person)
const descript = text.length > 200 ? text.slice(0,200) + '...' : text
const dispatch = useDispatch()
const deleteHandler = () => {

  let result = confirm("Вы точно хотите удалить пост?");
  if (result === true) {
    dispatch(deletePostQuery(id, person.token));
  }
};
const likeHandler = () => {
  console.log(person.token, )
  if (!like.includes(person._id)) {
    dispatch(setLikeQuery(id, person.token));
  } else {
    dispatch(deleteLikeQuery(id, person.token));
  }
};
 return (
   <>
        <div className="container post">
          <p className="media-heading">{index+1}.<strong>{title}</strong></p>

        <div className="text-center">
       <img src={img} className="rounded pict" alt=""/>
        </div>
        <p className="card__desc">
        <p><strong>{author}:</strong>{descript}</p>
        <p>#{tag}</p>
        <p>
          <IconButton aria-label="add to favorites" onClick={likeHandler}>
            <FavoriteIcon />
          </IconButton>
         {likes}
        </p>
        </p>
        
        
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