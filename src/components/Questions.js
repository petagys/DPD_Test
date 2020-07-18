import React, {Component, Fragment} from 'react';
import {inject, observer} from "mobx-react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import Button from "@material-ui/core/Button";
// import TableFooter from "@material-ui/core/TableFooter/TableFooter";
// import TablePagination from "@material-ui/core/TablePagination/TablePagination";
// import DevTools from "mobx-react-devtools";
// import Table from "@material-ui/core/Table/Table";
// import TableBody from "@material-ui/core/TableBody/TableBody";
// import TableRow from "@material-ui/core/TableRow/TableRow";
// import TableCell from "@material-ui/core/TableCell/TableCell";

const styles = {
    block: {
        padding: '12px',
        fontFamily: 'Helvetica'
    },
    radio: {
        '&$checked': {
            color: '#4B8DF8'
        }
    },
    checked: {},
    concept: {
        paddingTop: '36px'
    },
    btn: {
        backgroundColor: '#12D6E3',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#11a9b4'
        }
    }
};

@withStyles(styles)
@inject('test', 'user')
@observer
class Questions extends Component {
    constructor(props) {
        super(props);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.nextStage = this.nextStage.bind(this);
        this.endTest = this.endTest.bind(this);
        // this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleChangeRadio(e, i) {
        this.props.test.chooseAnswer(e.target.value);
        // console.log(e.target.name, e.target.value, i)
    };

    nextStage(){
        this.props.test.nextQuestion();
    }

    endTest(){
        const {test, user} = this.props;
        test.answerPush();
        test.chooseAnswer();
        user.setContent('result');
    }

    render() {
        const {classes, test} = this.props;

        return <Fragment>
            <div style={{textAlign: 'center', marginTop: '24px'}}>
                Вопрос {test.index+1} из {test.questions.length}
            </div>
            <div style={{
                margin: '20px 0',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div className={classes.concept}>{test.questions[test.index].q1}</div>
                <FormControl component="div">
                    <RadioGroup
                        value={test.currentSelection}
                        onChange={(e) => this.handleChangeRadio(e, test.questions[test.index].number)}
                        row name={test.questions[test.index].trait}>
                        {test.questions[test.index].count ?
                            <Fragment>
                                <FormControlLabel
                                    labelPlacement="top"
                                    value={'1'}
                                    control={<Radio
                                        classes={{
                                            root: classes.radio,
                                            checked: classes.checked
                                        }}/>}
                                    label={3}/>
                                <FormControlLabel labelPlacement="top" value={'2'}
                                                  control={<Radio

                                                      classes={{
                                                          root: classes.radio,
                                                          checked: classes.checked
                                                      }}
                                                  />} label={2}/>
                                <FormControlLabel labelPlacement="top" value={'3'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={1}/>
                                <FormControlLabel labelPlacement="top" value={'4'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={0}/>
                                <FormControlLabel labelPlacement="top" value={'5'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={1}/>
                                <FormControlLabel labelPlacement="top" value={'6'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={2}/>
                                <FormControlLabel labelPlacement="top" value={'7'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={3}/>
                            </Fragment>
                            :
                            <Fragment>
                                <FormControlLabel labelPlacement="top" value={'7'} control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>}
                                                  label={3}/>
                                <FormControlLabel labelPlacement="top" value={'6'}
                                                  control={<Radio
                                                      classes={{
                                                          root: classes.radio,
                                                          checked: classes.checked
                                                      }}
                                                  />} label={2}/>
                                <FormControlLabel labelPlacement="top" value={'5'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={1}/>
                                <FormControlLabel labelPlacement="top" value={'4'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={0}/>
                                <FormControlLabel labelPlacement="top" value={'3'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={1}/>
                                <FormControlLabel labelPlacement="top" value={'2'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={2}/>
                                <FormControlLabel labelPlacement="top" value={'1'}
                                                  control={<Radio classes={{
                                                      root: classes.radio,
                                                      checked: classes.checked
                                                  }}/>} label={3}/>
                            </Fragment>
                        }
                    </RadioGroup>
                </FormControl>
                <div className={classes.concept}>{test.questions[test.index].q2}</div>
            </div>
            <div style={{textAlign: 'center', minHeight: '40px'}}>
                {!!test.currentSelection && test.index < test.questions.length-1 && <Button onClick={this.nextStage} className={classes.btn} variant="contained">
                    Дальше
                </Button>}
                {!!test.currentSelection && test.index >= test.questions.length-1 && <Button onClick={this.endTest} className={classes.btn} variant="contained">
                    Результат
                </Button>}
            </div>
        </Fragment>

    }
}

export default Questions;