import APIRequest from '../utils/axios.config'

export const getJoke = async () => {
    const response = await APIRequest.get('/');
    return response;

    };