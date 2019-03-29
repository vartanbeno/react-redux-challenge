import axios from 'axios';
import store from '../store';

export default class AuthService {

    static getAuthToken(email, password) {
        return axios.post(
            'http://interview-api.opslock.com/auth',
            `email=${email}&password=${password}`
        );
    }

    static validateAuthToken() {
        return axios.get('http://interview-api.opslock.com/auth', AuthService.getAuthorizationHeader());
    }

    static getAuthorizationHeader() {
        return {
            headers: {
                Authorization: `Bearer ${store.getState().token}`
            }
        }
    }

}
