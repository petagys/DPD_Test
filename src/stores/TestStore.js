import { decorate, observable, action } from "mobx"
import questions from '../utils/questions'


class TestStore {
    constructor(){
        this.answers = [];
        this.questions = questions;
        this.trust = [];
        this.initiative = [];
        this.competence = [];
        this.autonomy = [];
        this.identity = [];
        // this.page = 0;
        // this.rowsPerPage = 10;
        // this.rows = 10;
        // this.qrows = this.questions.slice(this.page * this.rowsPerPage, this.page * this.rowsPerPage + this.rowsPerPage);
    }

    // @action('change table page')
    // changePage(page=0){
    //     this.page = page;
    //     // console.log(this.page)
    //     this.qrows = this.questions.slice(this.page * this.rowsPerPage, this.page * this.rowsPerPage + this.rowsPerPage);
    // }



}
decorate(TestStore, {
    page: observable,
    rowsPerPage: observable,
    rows: observable,
    questions: observable,
    qrows: observable,
});
export default new TestStore();