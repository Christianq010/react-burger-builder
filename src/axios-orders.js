import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-66746.firebaseio.com/'
})

export default instance;