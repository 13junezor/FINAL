import { useSelector } from "react-redux"
import Main from "../Main/Main"

const Greeting = () => {

    let token = useSelector(store => store.person.token)
    if (token) {return (
        <div>
        <Main />
        </div>
    )
    }
    return (
        <div>
           Добро пожаловать на сайт! Чтобы насладиться постами, Вам необходимо зарегистрироваться или авторизоваться!
        </div>
    )
}
export default Greeting