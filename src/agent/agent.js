import axios from 'axios'

// axios.headers = {
//     'Content-Type': 'application/json'
// }

export function axiosRequestPost(url, data) {
    return axios({
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data,
        // {
        //     name: this.name,
        //     surname: this.surname,
        //     email: this.eMail
        // },
        url
    })
};

export function axiosRequestGet(url, data) {
    return axios({
        method: 'GET',
        // headers: {'Content-Type': 'application/json'},
        params: data,
        url
    })
}