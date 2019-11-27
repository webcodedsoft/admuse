import axios from "axios";
import {toast} from 'react-toastify';
import auth from './authService';

axios.defaults.headers.common['Authorization'] = "Bearer "+auth.getAuthToken();

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError) {
        console.log("Loggin the error", error);
        toast.error("An unexpected error occured.");
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
}