import {decorate, observable, action} from "mobx"
import {fioRequest} from '../agent/constants'
// import {getUserInfo} from "../utils/Requests";

class UserInfoStore {
    constructor() {
        this.surname = '';
        this.surnameFlag = true;
        this.name = '';
        this.nameFlag = true;
        this.eMail = '';
        this.eMailFlag = true;
        this.content = 'reg';
        this.humanId = false;
        this.got = true;
    }
    

    @action('set user surname')
    setSurname(value = '') {
        this.surname = value;
    }

    @action('set user name')
    setName(value = '') {
        this.name = value;
    }

    @action('set user e-mail')
    setEmail(value = '') {
        this.eMail = value;
    }

    @action('check all user data')
    checkUserData() {
        this.surnameFlag = !!this.surname;
        this.nameFlag = !!this.name;
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        this.eMailFlag = re.test(this.eMail);
        if (this.surnameFlag && this.nameFlag && this.eMailFlag) {
            this.got = false;
            return fioRequest
                .saveFio(this.name, this.surname, this.eMail)
                .then(action(res => {
                    this.humanId = res.data;
                    this.got = true;
                    if(this.humanId !== false){
                        this.setContent('test');
                    }
                }))
                .catch(action(err => {
                    console.warn(err);
                    this.got = true;
                }))
            }
    }   

    @action('set page')
    setContent(val = 'reg') {
        this.content = val;
    }

}

decorate(UserInfoStore, {
    surname: observable,
    name: observable,
    eMail: observable,
    dataChecked: observable,
    content: observable,
    nameFlag: observable,
    surnameFlag: observable,
    eMailFlag: observable,
    got: observable,
});
export default new UserInfoStore();