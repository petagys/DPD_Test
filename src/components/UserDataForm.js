import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {inject, observer} from "mobx-react";

const styles = {
    block:{
        padding: '12px'
    },
    block50:{
        width: '50%'
    },
    btn:{
        backgroundColor: '#12D6E3',
        color: '#ffffff',
        '&:hover':{
            backgroundColor: '#11a9b4'
        }
    }
};

@withStyles(styles)
@inject('user')
@observer
class UserDataForm extends Component {

    constructor(props){
        super(props);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.startTest = this.startTest.bind(this);
    }

    handleChangeSurname = e => {
        this.props.user.setSurname(e.target.value)
    };

    handleChangeName = e => {
        this.props.user.setName(e.target.value)
    };

    handleChangeEmail = e => {
        this.props.user.setEmail(e.target.value)
    };

    startTest(){
        this.props.user.checkUserData();
    }

    render() {
        const {classes} = this.props;

        return <Grid container justify={"center"}>
                <Grid item xs={8}>
                    <Paper style={{padding: '12px'}}>
                        <div style={{textAlign: "center", marginBottom: '12px'}}>
                            Для прохождения теста введите свои данные
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className={classes.block + ' ' + classes.block50}>
                                <TextField onChange={this.handleChangeSurname} fullWidth variant={'outlined'} label={'Фамилия'} placeholder={'Иванов'}/>
                            </div>
                            <div className={classes.block + ' ' + classes.block50}>
                                <TextField onChange={this.handleChangeName} fullWidth variant={'outlined'} label={'Имя'} placeholder={'Иван'}/>
                            </div>
                        </div>
                        <div className={classes.block}>
                            <TextField onChange={this.handleChangeEmail} fullWidth variant={'outlined'} label={'E-mail'} placeholder={'ivanov@mail.ru'}/>
                        </div>
                        <div className={classes.block} style={{textAlign: 'center'}}>
                            <Button onClick={this.startTest} className={classes.btn} variant="contained" >
                                Начать тестирование
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>;
    }
}

export default UserDataForm;