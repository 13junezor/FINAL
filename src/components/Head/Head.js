import { Link } from "react-router-dom";

import './styles.css'
function Head() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cap" >
  <div className="container-fluid cap">
  <Link className='nav-link but' to="/">Главная</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li class="nav-item">
      <Link className='nav-link but' to="signin">Войти</Link>
      <Link className='nav-link but' to="posts">Посты</Link>
        <Link className='nav-link but' to="posting">Опубликовать статью</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link but' to="about">О нас</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link but' to="contacts">Контакты</Link>
        </li>
                    </ul>
    </div>
  </div>
</nav>
  )
}
export default Head