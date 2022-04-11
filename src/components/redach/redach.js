import {  useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import './style.css'
function Redach(){
    const LSPostKey = 'postos'
    const postos = useSelector(store => store.post)
  const {postsId} = useParams()

  

   const [title, setTitle] = useState('')
   const [text, setText] = useState('')
   const [img, setImg] = useState('')
   const [tag, setTag] = useState('')
/* отлавливаем занчения инпута*/
const changeTitle = (e) => {
    setTitle(e.target.value)
    }
const changeText = (e) => {
    setText(e.target.value)
    }
const changeImg = (e) => {
    setImg(e.target.value)
    }
const changeTag = (e) => {
    setTag(e.target.value)
    }
    const navigate = useNavigate()  
const submitHandler = (e) => {
    e.preventDefault()
    const indexPost = postos.findIndex(item => item.id === +postsId)
    postos[indexPost].text = text
    postos[indexPost].title = title
    postos[indexPost].img = img
    postos[indexPost].tag = tag
     console.log(postos)
     console.log(indexPost)
    setTitle(title)
    setText(text)
    setImg(img)
    setTag(tag)
    localStorage.setItem(LSPostKey, JSON.stringify(postos))
    navigate(`/posts`)
    
       }
       
      

   return (
    <form   onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    <div className="mb-3">
      <label for="exampleInputEmail1" 
      className="form-label title">Заголовок</label>
      <input 
      onChange={changeTitle}
      type="text" 
      className="form-control " 
      id="titl" 
      aria-describedby="emailHelp" 
      value={title}
      />
      <div id="emailHelp" className="form-text">Измените заголовок</div>
    </div>
    <div className="mb-3">
            <div class="form-group">
    <label for="exampleFormControlTextarea1">текст статьи</label>
    <textarea 
    onChange={changeText}
    className="form-control pole" 
    id="exampleFormControlTextarea1" 
    rows="3"
    value={text}>
    
    </textarea>
  </div>

      <div id="emailHelp" className="form-text">Измените текст статьи</div>
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
      value={img}
      />
      <div id="emailHelp" className="form-text">Измените ссылку на изображение</div>
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
      value={tag}
      />
      <div id="emailHelp" className="form-text">Измените тег статьи</div>
    </div>
        <button 
    type="submit" 
    className="btn btn-primary">
        Сохранить изменения
        </button>
  </form>
   ) 
}
export default Redach