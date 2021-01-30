import { decorate, observable, action } from "mobx"
import questions from '../utils/questions'


class TestStore {
    constructor(){
        this.answers = [];
        this.questions = questions.slice(0, 11);
        this.index = 0;
        this.trust = [];
        this.initiative = [];
        this.competence = [];
        this.autonomy = [];
        this.identity = [];
        this.currentSelection = '';
        // this.page = 0;
        // this.rowsPerPage = 10;
        // this.rows = 10;
        // this.qrows = this.questions.slice(this.page * this.rowsPerPage, this.page * this.rowsPerPage + this.rowsPerPage);
    }

    @action('chosen value')
    chooseAnswer(value=''){
        this.currentSelection = value;
    }

    @action('change table page')
    nextQuestion(){
        this.answerPush();
        this.chooseAnswer();
        this.index += 1;
        // console.log(this.answers);
    }


    @action('chosen value')
    answerPush(){
        // let obj = {};
        // obj.trait = this.questions[this.index].trait;
        // obj.value = +this.currentSelection;
        // obj.number = this.questions[this.index].number+1;
        switch (this.questions[this.index].trait) {
            case 'autonomy':
                this.autonomy.push(+this.currentSelection);break;
            case 'identity':
                this.identity.push(+this.currentSelection);break;
            case 'competence':
                this.competence.push(+this.currentSelection);break;
            case 'trust':
                this.trust.push(+this.currentSelection);break;
            case 'initiative':
                this.initiative.push(+this.currentSelection);break;
            default:
                this.answers.push(+this.currentSelection);break;
        }
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
    index: observable,
    currentSelection: observable
});
export default new TestStore();