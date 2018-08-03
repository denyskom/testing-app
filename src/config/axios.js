import axios from 'axios';
import routes from "../Main/Routes";

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

axios.interceptors.response.use(response => {
    return response;
}, err => {
    if(err.response.status === 401) {
        window.location.href = `../../${routes.appLoginRelative}`
    }
});

export default axios;