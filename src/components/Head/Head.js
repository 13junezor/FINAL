/* eslint-disable no-restricted-globals */
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import './styles.css'
function Head() {
  const person = useSelector((store) => store.person)
  const navigate = useNavigate() 
  const exitHandler= () => {
   location.reload();
   localStorage.clear()
     navigate('/')
  }
  let into = <></>
let reg = <></>
let ext = <></>
let send = <></>
  if (!person._id) {
    into =  <li className="nav-item">
    <Link className='nav-link but' to="signin">Войти</Link>
    </li>
   reg =  <li className="nav-item">
   <Link className='nav-link but' to="/signup">Зарегистрироваться</Link>
   </li>
   
 }
 if (person._id) {
  ext =   <button 
  onClick={exitHandler}
  type="button" 
  className="btn btn-outline-danger">
      Выйти
      </button>
      send =   <li className="nav-item">
      <Link className='nav-link but' to="posting">Отправить</Link>
      </li>
 }
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cap" >
  <div className="container">
      <ul className="navbar-nav d-flex flex-row">
       <img src="logo.png" alt='logo' className="logo_img"/>
      <li className="nav-item">
      <Link className='nav-link but' to="posts">Все открытки</Link>
      </li>
      {into}
      {reg}
       {send}     
    
        <li className="nav-item">
        <Link className='nav-link but' to="contacts">Команда авторов</Link>
        </li>

      {ext}
                    </ul>
    </div>
</nav>
  )
}
export default Head