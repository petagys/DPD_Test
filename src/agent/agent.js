import axios from 'axios'

// axios.headers = {
//     'Content-Type': 'application/json'
// }

export default function axiosRequestPost(url, data) {
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
}