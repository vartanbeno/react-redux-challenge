import axios from 'axios';

export default class AuthService {

    static getAuthToken(email, password) {
        return axios.post('http://interview-api.opslock.com/auth', {
            email, password
        });
    }

    static validateAuthToken() {
        return axios.get('http://interview-api.opslock.com/auth')
    }

    static getAuthorizationHeader() {
        return {
            headers: {
                Authorization: `Bearer ${null}`
            }
        }
    }

}
