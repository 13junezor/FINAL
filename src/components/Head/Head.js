import { Link } from "react-router-dom";

import './styles.css'
function Head() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cap" >
  <div className="container-fluid">
  <Link className='nav-link' to="/">Главная</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li class="nav-item">
        <Link className='nav-link' to="posting">Опубликовать статью</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="about">О нас</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="contacts">Контакты</Link>
        </li>
        
            </ul>
    </div>
  </div>
</nav>
  )
}
export default Head