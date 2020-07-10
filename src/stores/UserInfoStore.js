import { decorate, observable, action } from "mobx"

class UserInfoStore {
    constructor(){
        this.surname = '';
        this.name = '';
        this.eMail = '';
        this.dataChecked = false;
    }

    @action('set user surname')
    setSurname(value=''){
        this.surname = value;
    }

    @action('set user name')
    setName(value=''){
        this.name = value;
    }

    @action('set user e-mail')
    setEmail(value=''){
        this.eMail = value;
    }

    @action('check all user data')
    checkUserData(){
        console.log('Фамилия: '+this.surname);
        console.log('Имя: '+this.name);
        console.log('Электронная почта: '+this.eMail);
        if(this.surname && this.name && this.eMail){
            this.dataChecked = true;
        }
    }

}
decorate(UserInfoStore, {
    surname: observable,
    name: observable,
    eMail: observable,
    dataChecked: observable,
});
export default new UserInfoStore();