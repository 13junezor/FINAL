import {  useState } from "react"

import { useDispatch, useSelector } from "react-redux";
import { updatePostQuery } from "../../redux/actionCreators/selectedPostAC";
import './style.css'
function Redach({ title, image, text, _id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newText, setNewText] = useState(text);
  const dispatch = useDispatch();
  const person = useSelector((store) => store.person);
  const submitHandler = (e) => {
    e.preventDefault()
    const preparedPostQuery = {
      title: newTitle,
      image: newImage,
      text: newText,
    };
   
    const body = JSON.stringify(preparedPostQuery);

    dispatch(updatePostQuery(body, person.token, _id));
    setNewTitle(newTitle);
    setNewImage(newImage);
    setNewText(newText);
  };

   return (
    <form  onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    <div className="mb-3">
      <label for="exampleInputEmail1" 
      className="form-label title">Заголовок</label>
      <input 
      onChange={(e) => setNewTitle(e.target.value)}
      type="text" 
      className="form-control " 
      id="titl" 
      aria-describedby="emailHelp" 
      value={newTitle}
      />
      <div id="emailHelp" className="form-text">Измените заголовок</div>
    </div>
    <div className="mb-3">
            <div class="form-group">
    <label for="exampleFormControlTextarea1">текст статьи</label>
    <textarea 
    onChange={(e) => setNewText(e.target.value)}
    className="form-control pole" 
    id="exampleFormControlTextarea1" 
    rows="3"
    value={newText}>
    
    </textarea>
  </div>

      <div id="emailHelp" className="form-text">Измените текст статьи</div>
    </div>
    <div 
    className="mb-3">
      <label for="exampleInputPassword1"
       className="form-label img">Ссылка на изображение</label>
      <input 
      onChange={(e) => setNewImage(e.target.value)}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={newImage}
      />
      <div id="emailHelp" className="form-text">Измените ссылку на изображение</div>
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