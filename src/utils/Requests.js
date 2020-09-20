import axios from 'axios';
const axiosHeader = { 'Content-Type': 'application/x-www-form-urlencoded' };

export function setUserInfo(name, surname, email) {
    let params = {
        name: name,
        surname: surname,
        email: email
    };
    return axios({
        method: 'post',
        headers: axiosHeader,
        data: params,
        url: 'http://localhost:80/dpdtest/index.php'
    })
}

export function getUserInfo(name, surname, email) {
    // let params = {
    //     name: name,
    //     surname: surname,
    //     email: email
    // };
    axios({
        method: 'get',
        headers: axiosHeader,
        data: {},
        url: 'http://localhost:80/dpdtest/index.php'
    })
}