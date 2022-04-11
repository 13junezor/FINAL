import { useContext, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostListContext } from "../../contexts/PostListContext"

function Forma({ title = '', text= '', img = '', tag = ''}) {

const formRef = useRef(null)

useEffect(() => {
formRef.current.elements.title.value = title
formRef.current.elements.text.value = text
formRef.current.elements.img.value = img
formRef.current.elements.tag.value = tag
}, )
const LSPostKey = 'postos'
const {postos} = useContext(PostListContext)
const {postsId} = useParams()



 const [titl, setTitle] = useState('')
 const [tex, setText] = useState('')
 const [imga, setImg] = useState('')
 const [taga, setTag] = useState('')
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
  postos[indexPost].text = tex
  postos[indexPost].title = titl
  postos[indexPost].img = imga
  postos[indexPost].tag = taga
   console.log(postos)
   console.log(indexPost)
  setTitle(titl)
  setText(tex)
  setImg(imga)
  setTag(taga)
  localStorage.setItem(LSPostKey, JSON.stringify(postos))
  navigate(`/posts`)
  
     }
     


    return (
        <form  onSubmit={submitHandler} className="d-flex flex-column align-items-center rb-3" >
    <div className="mb-3">
            <input ref={formRef} onChange={changeTitle}
      placeholder="Измените заголовок"
      type="text"
      name="title" 
      className="form-control " 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      value={title}
            />

    </div>
    <div className="mb-3">
            <div class="form-group">
    
            <textarea onChange={changeText} name="text"
     placeholder="Измените текст"
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" value={text}
            />
  </div>
    </div>
    <div 
    className="mb-3">
    <input name="img"  onChange={changeImg}
     placeholder="Измените ссылку"
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" value={imga}
            />
     
    </div>
    <div 
    className="mb-3">
      
      <input onChange={changeTag}name="tag"
      placeholder="измените тэг"
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={taga}
      />

    </div>
        <button 
    type="submit" 
    className="btn btn-primary">
       Сохранить изменения
        </button>
  </form>
    )
}
export default Forma