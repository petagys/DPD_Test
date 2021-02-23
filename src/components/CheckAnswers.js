import React, {Component, Fragment} from 'react';
import {inject, observer} from "mobx-react";
import { Button, CircularProgress, Paper, TextField, withStyles } from '@material-ui/core';
import TableResults from './TableResults';

const styles = {
    paper: {
        padding: '16px',
        margin: '12px'
    },
    block: {
        width: '100%'
    },
    tfield: {
        marginLeft: '16px'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '12px'
    },
    btn: {
        backgroundColor: '#12D6E3',
        marginTop: '12px',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#11a9b4'
        }
    }
};

@withStyles(styles)
@inject('answer')
@observer
class CheckAnswers extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            from: '',
            to: '',
        }
    }
    componentDidMount(){
        this.props.answer.loadResults();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    sendForm = () => {
        console.log('send', this.state);
    };

    renderTable = () => {
        if(this.props.answer.loading){
            return <div style={{textAlign: 'center', paddingBottom: '12px'}}>
                <CircularProgress />
                <h2>Загрузка результатов...</h2>
            </div>
        }else{
            return <TableResults />
        }
    };

    render() {
        const {classes, answer} = this.props;
        return <Fragment>
            <Paper className={classes.paper}>
                <div className={classes.form}>
                    <TextField 
                        onChange={this.handleChange}
                        name='name'
                        label="Фамилия или имя" />
                    <TextField 
                        onChange={this.handleChange}
                        className={classes.tfield}
                        name='email'
                        label="E-Mail" />
                    <TextField
                        label="До"
                        type="date"
                        name='from'
                        onChange={this.handleChange}
                        className={classes.tfield}
                        InputLabelProps={{
                          shrink: true,
                        }}/>
                    <TextField
                        label="После"
                        type="date"
                        name='to'
                        className={classes.tfield}
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}/>
                    <div className={classes.tfield}>
                        <Button className={classes.btn} onClick={this.sendForm}>Поиск</Button>
                    </div>
                </div>
            </Paper>
            <Paper className={classes.paper}>
                {this.renderTable()}
            </Paper>
        </Fragment>
    }
}

export default CheckAnswers;