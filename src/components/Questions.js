import React, {Component, Fragment} from 'react';
import {inject, observer} from "mobx-react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"

const styles = {
    block: {
        padding: '12px',
        fontFamily: 'Helvetica'
    },
    radio: {
        '@media (max-width: 767px)':{
            padding: '7px'
        },
        '&$checked': {
            color: '#4B8DF8'
        }
    },
    checked: {},
    concept: {
        paddingTop: '36px',
        width: '50%',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#12D6E3',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#11a9b4'
        }
    },
    btnLast:{
        backgroundColor: '#DA2F34',
        color: '#ffffff',
        '&:hover':{
            backgroundColor: '#EF2F34'
        }
    },
    fcl:{
        '@media (min-width: 1600px)':{
            margin: '0 16px'
        },
        '@media (min-width: 1280px) and (max-width: 1599px)':{
            margin: '0 12px'
        },
        '@media (min-width: 1024px) and (max-width: 1279px)':{
            margin: '0 6px'
        },
        '@media (min-width: 768px) and (max-width: 1023px)':{
            margin: '0 3px'
        },
        '@media (max-width: 767px)':{
            margin: '0'
        },
    },
    q2:{
        '@media (min-width: 768px)':{
            display: 'none'
        },
    },
    q2Concept:{
        '@media (max-width: 767px)':{
            display: 'none'
        },
    },
    mainContainer:{
        margin: '20px 0',
        display: 'flex',
        '@media (max-width: 767px)':{
            display: 'block'
        },
    },
    q1Concept:{
        '@media (max-width: 767px)':{
            justifyContent: 'space-between',
            width: '100%',
            display: 'flex',
            paddingTop: '8px',
            paddingBottom: '12px'
        },

    }
};

@withStyles(styles)
@inject('test', 'user')
@observer
class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.nextStage = this.nextStage.bind(this);
        this.endTest = this.endTest.bind(this);
        // this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleChangeRadio(e) {
        this.props.test.chooseAnswer(e.target.value);
        // console.log(e.target.name, e.target.value)
    };

    nextStage(){
        this.props.test.nextQuestion();
    }

    async endTest(){
        const {test, user} = this.props;
        await test.nextQuestion(false);
        await this.setState({loading: true})
        if(await test.sendAnswers(user.humanId)){
            await this.setState({loading: false});
            await user.setContent('result');
        }
    }

    render() {
        const {classes, test} = this.props;
        const {loading} = this.state;
        let fcl = [];
        let index = test.questions[test.index].count ? 1 : 7;

        for (let i = -3;i <= 3;i++){
            fcl.push(
                <FormControlLabel
                    key={index}
                    labelPlacement="top"
                    value={index.toString()}
                    className={classes.fcl}
                    control={<Radio
                        classes={{
                            root: classes.radio,
                            checked: classes.checked
                        }}/>}
                    label={Math.abs(i)}/>
            );
            test.questions[test.index].count ? index++ : index--;
        }
        return <Fragment>
            <div style={{textAlign: 'center', marginTop: '24px'}}>
                Вопрос {test.index+1} из {test.questions.length}
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.concept + ' ' + classes.q1Concept}>
                    <div>{test.questions[test.index].q1}</div>
                    <div className={classes.q2}>{test.questions[test.index].q2}</div>
                </div>
                <FormControl style={{width: '100%', alignItems: 'center'}} component="div">
                    <RadioGroup
                        value={test.currentSelection}
                        onChange={(e) => this.handleChangeRadio(e, test.questions[test.index].number)}
                        row name={test.questions[test.index].trait}>
                        {fcl.map((item) => {
                            return item;
                        })
                        }
                    </RadioGroup>
                </FormControl>
                <div className={classes.concept + ' ' + classes.q2Concept}>{test.questions[test.index].q2}</div>
            </div>
            <div style={{textAlign: 'center', minHeight: '40px'}}>
                {!!test.currentSelection && test.index < test.questions.length-1 && <Button onClick={this.nextStage} className={classes.btn} variant="contained">
                    Дальше
                </Button>}
                {!!test.currentSelection && test.index >= test.questions.length-1 && (
                loading ? 
                <CircularProgress /> : 
                <Button onClick={this.endTest} className={classes.btnLast} variant="contained">
                    Результат
                </Button>)}
            </div>
        </Fragment>

    }
}

export default Questions;