import {  useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import {  queryNewPost } from "../../redux/actionCreators/postAC"

import './style.css'
const Form = () => {
  const dispatch = useDispatch()
const navigate = useNavigate()
   const [title, setTitle] = useState('')
   const [text, setText] = useState('')
   const [image, setImage] = useState('')
   const [tags, setTags] = useState('')
/* отлавливаем занчения инпута*/
const changeTitle = (e) => {
    setTitle(e.target.value)}
const changeText = (e) => {
    setText(e.target.value)}
const changeImg = (e) => {
    setImage(e.target.value) }
const changeTag = (e) => {
    setTags(e.target.value) }
/* отлавливаем значения формы ДОБАВИТЬ ВАЛИДАЦИЮ*/
const submitHandler = () => {
  const preparedPostQuery = {
    title,
    text,
    image,
    tags: tags.split(',').map((el) => el.trim()) 
  }
   
     dispatch(queryNewPost(JSON.stringify(preparedPostQuery)))
    setTitle('')
    setText('')
    setImage('')
    setTags('')
    navigate(`/`)
      }
     
       
   return (
     <>

     <div>
       <img  className="Post_img" src="logo.png" alt="Logo-big"></img>
     </div>
<div>
  <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    <div className="mb-3">
      <label for="postcard__title" 
      className="form-label title">Порадуй друзей открыткой!</label>
      <input 
      onChange={changeTitle}
      type="text" 
      className="form-control " 
      id="postcard__title" 
      aria-describedby="emailHelp" 
      value={title}
      placeholder="Заголовок..."
      required
      />
    </div>
    <div className="mb-3">
    <div className="form-group">
    <label for="postcard__desc">Описание</label>
    <textarea 
    onChange={changeText}
    className="form-control pole" 
    id="postcard__desc" 
    rows="3"
    value={text}
    placeholder="Текст открытки..."
  
    >
      
    </textarea>
  </div>
    </div>
    <div 
    className="mb-3">
      <label for="postcard__img"
       className="form-label img">Изображение</label>
      <input 
      onChange={changeImg}
      type="text" 
      className="form-control" 
      id="postcard__img" 
      value={image}
      placeholder="Добавьте ссылку на изображение"
      required
      />
    </div>
    <div 
    className="mb-3">
      <label for="postcard__tags"
       className="form-label tag">Теги:</label>
      <input 
      onChange={changeTag}
      type="text" 
      className="form-control" 
      id="postcard__tags" 
      value={tags}
      placeholder="По тегам друзья смогу найти ваши открытки"
      />
      {/* <div id="emailHelp" className="form-text"></div> */}
    </div>
        <button 
    type="submit" 
    className="btn btn-primary">
        Отправить
        </button>
  </form>
</div>
     </>
    
   ) 
}
export default Form