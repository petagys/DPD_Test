import {axiosRequestPost, axiosRequestGet} from './agent'

// export const fioRequest = {
//     saveFio: (name, surname, email) => {
//         return axiosRequestPost('/api/index.php', {name, surname, email});
//     }
// } 

export const resultReqeust = {
    save: (results) => {
        return axiosRequestPost('/api/resultSave.php', {...results});
    }
}

export const checkHistory = {
    getHistory: (form) => {
        if(form === null){
            return axiosRequestGet('/api/history.php', {count: 25})
        } else {
            return axiosRequestPost('/api/history.php', {...form});
        }
    }
}