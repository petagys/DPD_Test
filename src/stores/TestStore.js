import { decorate, observable, action } from "mobx"
import questions from '../utils/questions'
import {resultReqeust} from '../agent/constants'


class TestStore {
    constructor(){
        this.answers = [];
        this.questions = questions.slice(0, 30);
        this.index = 0;
        this.trust = [];
        this.initiative = [];
        this.competence = [];
        this.autonomy = [];
        this.identity = [];
        this.trustCount = null;
        this.initiativeCount = null;
        this.competenceCount = null;
        this.autonomyCount = null;
        this.identityCount = null;
        this.currentSelection = '';
        this.got = true;
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
    nextQuestion(next=true){
        this.answerPush();
        this.chooseAnswer();
        if(next)this.index += 1;
        // console.log(this.answers);
    }

    @action('Send request')
    sendAnswers(id=null){
        this.got = false;
        if(id !== null){
            const obj = {
                trust: this.trustCount,
                initiative: this.initiativeCount,
                competence: this.competenceCount,
                autonomy: this.autonomyCount,
                identity: this.identityCount
            }
            return resultReqeust
            .save(/*id*/0, obj)
            .then(action(({data}) => {
                // console.log('save', res)
                let flag = true;
                'trust' in data ? this.trust = data.trust : flag = false;
                'initiative' in data ? this.initiative = data.initiative : flag = false;
                'competence' in data ? this.competence = data.competence : flag = false;
                'autonomy' in data ? this.autonomy = data.autonomy : flag = false;
                'identity' in data ? this.identity = data.identity : flag = false;
                return flag;
            }))
            .catch(action(err => console.warn("Can't save", err)))
        }
    }


    @action('chosen value')
    answerPush(){
        switch (this.questions[this.index].trait) {
            case 'autonomy':
                this.autonomy.push(+this.currentSelection);
                this.autonomyCount = (this.autonomy.reduce(
                    (a, b) => (a + b)) / this.autonomy.length).toFixed(2)
                break;
            case 'identity':
                this.identity.push(+this.currentSelection);
                this.identityCount = (this.identity.reduce(
                    (a, b) => (a + b)) / this.identity.length).toFixed(2)
                break;
            case 'competence':
                this.competence.push(+this.currentSelection);
                this.competenceCount = (this.competence.reduce(
                    (a, b) => (a + b)) / this.competence.length).toFixed(2)
                break;
            case 'trust':
                this.trust.push(+this.currentSelection);
                this.trustCount = (this.trust.reduce(
                    (a, b) => (a + b)) / this.trust.length).toFixed(2)
                break;
            case 'initiative':
                this.initiative.push(+this.currentSelection);
                this.initiativeCount = (this.initiative.reduce(
                    (a, b) => (a + b)) / this.initiative.length).toFixed(2)
                break;
            default:
                this.answers.push(+this.currentSelection);break;
        }
    }

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