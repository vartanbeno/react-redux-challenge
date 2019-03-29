import axios from 'axios';

export default class UserService {

    static getShifts() {
        return axios.get('http://interview-api.opslock.com/config');
    }

    static getUserById(id) {
        return axios.get(`http://interview-api.opslock.com/user/${id}`)
    }

    static updateUserById(id, name, phone, location, shifts) {
        return axios.patch(`http://interview-api.opslock.com/user/${id}`, {
            name, phone, location, shifts
        })
    }

}
