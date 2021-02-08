import axiosRequestPost from './agent'

export const fioRequest = {
    saveFio: (name, surname, email) => {
        return axiosRequestPost('/api/index.php', {name, surname, email});
    }
} 

export const resultReqeust = {
    save: (id, results) => {
        return axiosRequestPost('/api/resultSave.php', {id, results});
    }
} 