import { API_TOKEN } from "../constants/constans";

const initState = () => {

    const token = localStorage.getItem(API_TOKEN) || '';

    return {
        post: [],
        search: "",
        person: {
            name: '',
            email: '',
            token,
        }
    }
}


export default initState