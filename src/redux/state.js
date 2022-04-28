import { API_TOKEN } from "../constants/constans";

const initState = () => {

    const token = localStorage.getItem(API_TOKEN) || '';
            return {
            posts: [],
            search: '',
            person: {
                name: '',
                email: '',
                token,
            },
            post: {},
        profile: {},
        comments: {},
        }
    }
    
    export default initState