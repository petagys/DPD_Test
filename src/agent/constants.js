import axiosRequestPost from './agent'

export const fioRequest = {
    saveFio: (name, surname, email) => {
        return axiosRequestPost('/api/index.php', {name, surname, email});
    }
} 