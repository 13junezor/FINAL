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
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    <div className="mb-3">
      <label for="exampleInputEmail1" 
      className="form-label title">Заголовок</label>
      <input 
            onChange={changeTitle}
      type="text" 
      className="form-control " 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      value={title}
      />
      <div id="emailHelp" className="form-text">Добавьте заголовок статьи</div>
    </div>
    <div className="mb-3">
            <div class="form-group">
    <label for="exampleFormControlTextarea1">Текс статьи</label>
    <textarea 
    onChange={changeText}
    className="form-control pole" 
    id="exampleFormControlTextarea1" 
    rows="3"
    value={text}>
    
    </textarea>
  </div>

      <div id="emailHelp" className="form-text">Добавьте текст статьи</div>
    </div>
    <div 
    className="mb-3">
      <label for="exampleInputPassword1"
       className="form-label img">Ссылка на изображение</label>
      <input 
      onChange={changeImg}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={image}
      />
      <div id="emailHelp" className="form-text">Добавьте ссылку на изображение</div>
    </div>
    <div 
    className="mb-3">
      <label for="exampleInputPassword1"
       className="form-label tag">Укажите тег</label>
      <input 
      onChange={changeTag}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={tags}
      />
      <div id="emailHelp" className="form-text">Добавьте тег статьи</div>
    </div>
        <button 
    type="submit" 
    className="btn btn-primary">
        Опубликовать
        </button>
  </form>
   ) 
}
export default Form