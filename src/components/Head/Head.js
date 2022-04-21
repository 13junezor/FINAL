import { Link } from "react-router-dom";

import './styles.css'
function Head() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cap" >
  <div className="container">
      <ul className="navbar-nav d-flex flex-row">
      <li className="nav-item mx-2 nav-brand">
      <Link className='nav-link but' to="/">Главная</Link>
        </li>
        <li className="nav-item mx-2">
        <Link className='nav-link but' to="signin">Войти</Link>
        </li >
    <li className="nav-item mx-2"><Link className='nav-link but' to="posts">Посты</Link>
    </li>
      <li className="nav-item mx-2">
      <Link className='nav-link but' to="posting">Опубликовать статью</Link>
      </li>
        <li className="nav-item mx-2">
        <Link className='nav-link but' to="about">О нас</Link>
        </li>
        <li className="nav-item mx-2">
        <Link className='nav-link but' to="contacts">Контакты</Link>
        </li>
                    </ul>
    </div>
</nav>
  )
}
export default Head