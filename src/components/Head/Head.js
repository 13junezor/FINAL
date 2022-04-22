import { Link } from "react-router-dom";

import './styles.css'

function Head() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cap" >
  <div className="container">
      <ul className="navbar-nav d-flex flex-row">
      <li className="nav-item">
    <Link className='nav-link but' to="/">Главная</Link>
    </li>
      <li className="nav-item">
      <Link className='nav-link but' to="signin">Войти</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link but' to="posts">Посты</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link but' to="posting">Опубликовать статью</Link>
      </li>
        <li className="nav-item">
        <Link className='nav-link but' to="contacts">Наши контакты</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link but' to="/signIn">Выйти</Link>
        </li>
                    </ul>
    </div>
</nav>
  )
}
export default Head