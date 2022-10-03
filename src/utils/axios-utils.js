import axios from 'axios';

const client = axios.create({ baseURL: "http://localhost:4000"})

export const request = ({...options}) => {
    client.defaults.headers.Authorization = "Bearer token";

    const onSuccess = (res) => res;
    const onError = (err) => {
        // Customize error Object Here...
        return err;
    }

    return client(options).then(onSuccess).catch(onError);
}