import { decorate, observable, action } from "mobx"
import {checkHistory} from '../agent/constants'


class AnswersStore {
    constructor(){
        this.loading = false;
        this.answers = [];
    }

    @action('load results')
    loadResults(form=null){
        this.loading = true;
        return checkHistory
                .getHistory(form)
                .then(action(res => {
                    console.log(res);
                    this.answers = res.data;
                    this.loading = false;
                }))
                .catch(action(err => {
                    console.warn('Error', err);
                    this.loading = false;
                }))
    }

}

decorate(AnswersStore, {
    loading: observable,
    results: observable
});

export default new AnswersStore();