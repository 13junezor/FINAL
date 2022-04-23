import Authorcard from "./Authorcard/Authorcard";
import "./styles.css";

function Contacts() {
  return (
    <>
      <h1 className="listeners">Слушатели курса</h1>
      <div className="container user_wrapper">
        <Authorcard
          img=""
          name="Михайлов Андрей"
          mail="x22external@gmail.com"
          phone="+7 987 797 59 02"
          link="https://github.com/13junezor"
        />
        <Authorcard
          img=""
          name="Лаукарт Иветта"
          mail="test@mail.ru"
          phone="+7 916 138 93 76"
          link="https://github.com/"
        />
        <Authorcard
          img=""
          name="Алексеев Кирилл"
          mail="alekeev_kirill_a@mail.ru"
          phone="+7 950 730 15 02"
          link="https://github.com/silent174"
        />
      </div>
      <h3 className="listeners">СберУниверситет 2022г.</h3>
    </>
  );
}
export default Contacts;
