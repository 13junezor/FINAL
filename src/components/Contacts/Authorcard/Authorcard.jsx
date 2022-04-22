import s from "./styles.module.css";

const Authorcard = (props) => {
  const imgBoy =
    "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg";
  return (
    <>
      <div className={s.user__card}>
        <div>
          <img src={imgBoy} alt="avatar" className={s.user__card_avatar} />
        </div>
        <div className={s.user__card_text + " " + s.name}>{props.name}</div>
        <div className={s.user__card_text + " " + s.mail}>
          Почта:
          <a href={"mailto:" + props.mail}> {props.mail}</a>
        </div>
        <div className={s.user__card_text + " " + s.phone}>
          Телефон:
          <a href={"tel:" + props.phone}> {props.phone}</a>
        </div>
        <div className={s.user__card_text + " " + s.link}>
          <a href={props.link} target="_blank" rel="noreferrer">
            Профиль на Гитхаб
          </a>
        </div>
      </div>
    </>
  );
};
export default Authorcard;
