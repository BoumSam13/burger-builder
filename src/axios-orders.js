import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8dc1b.firebaseio.com/'
});

export default instance;