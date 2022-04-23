import { useSelector } from "react-redux"
import Main from "../Main/Main"
import style from "./style.module.css"
const Greeting = () => {

    let token = useSelector(store => store.person.token)
    if (token) {return (
        <div>
        <Main />
        </div>
    )
    }
    return (
        <div className={style.greeding__wrapper}>
            <img alt="img" src="logo.png"/>
            <div className={style.greeting__title}> 
                PostCards 
            </div>
            <div className={style.greeting__desc}>
        <p className={style.greeding__text}>Добро пожаловать! Для дальнейшего просмотра ресурса, Вам необходимо войти или создать аккаунт!</p>
        <p className={style.greeding__text}>Обращаем ваше внимение на то, что данный сайт является прототипом, выполненного командой №2 в рамках учебного курса по веб-разработке от СберУниверситета в 2022г.</p>
        <p className={style.greeding__text}>Некоторые элементы приложения могут отрабатывать не корректно, а моменту релиза быть полностью отключены или заменены. </p>
         </div>
        </div>
    )
}
export default Greeting