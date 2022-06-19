import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/random',
    headers: {
        'Content-Type': 'application/json'
    }
}
);