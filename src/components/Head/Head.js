import { Link } from "react-router-dom";

import './styles.css'
function Head() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cap" >
  <div className="container">
      <ul className="navbar-nav d-flex flex-row">
       <img src="logo.png" alt='logo' className="logo_img"/>
      
      <li className="nav-item">
    <Link className='nav-link but' to="/">Главная</Link>
    </li>
    <li className="nav-item">
        <Link className='nav-link but' to="/signup">Зарегистрироваться</Link>
        </li>
      <li className="nav-item">
      <Link className='nav-link but' to="signin">Войти</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link but' to="posts">Все открытки</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link but' to="posting">Отправить</Link>
      </li>
        <li className="nav-item">
        <Link className='nav-link but' to="contacts">Команда авторов</Link>
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