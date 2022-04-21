import "./styles.css";

function Contacts() {
  return (
    <>
      <h1 className="listeners">Слушатели курса</h1>
      <div className="container user_wrapper">
        <div className="user__card">
          <div>
            <img
              src="./placeholder.webp"
              alt="avatar"
              className="user__card_avatar"
            />
          </div>
          <div className="user__card_text name">Михайлов Андрей</div>
          <div className="user__card_text mail"> Почта: мояПочта@mail.ru </div>
          <div className="user__card_text phone"> Телефон: +7333-33-33-33 </div>
          <div className="user__card_text git"> Профиль на Гитхаб: </div>
        </div>

        <div className="user__card">
          <div>
            <img
              src="./placeholder.webp"
              alt="avatar"
              className="user__card_avatar"
            />
          </div>
          <div className="user__card_text name">Лаукарт Иветта</div>
          <div className="user__card_text mail"> Почта: мояПочта@mail.ru </div>
          <div className="user__card_text phone"> Телефон: +7333-33-33-33 </div>
          <div className="user__card_text git"> Профиль на Гитхаб: </div>
        </div>

        <div className="user__card">
          <div>
            <img
              src="./placeholder.webp"
              alt="avatar"
              className="user__card_avatar"
            />
          </div>
          <div className="user__card_text name">Алексеев Кирилл</div>
          <div className="user__card_text mail"> Почта: мояПочта@mail.ru </div>
          <div className="user__card_text phone"> Телефон: +7333-33-33-33 </div>
          <div className="user__card_text git"> Профиль на Гитхаб: </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;