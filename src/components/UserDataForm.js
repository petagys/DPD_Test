import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';

const styles = {
    block: {
        padding: '12px'
    },
    block50: {
        width: '50%',
        '@media (max-width: 767px)':{
            width: 'auto',
        }
    },
    btn: {
        backgroundColor: '#12D6E3',
        color: '#ffffff',
        margin: '4px 0',
        '&:hover': {
            backgroundColor: '#11a9b4'
        }
    },
    container: {
        width: '95%',
        margin: '0 auto',
        maxWidth: '1000px',
    },
    fieldsContainer:{
        display: 'flex',
        '@media (max-width: 767px)':{
            display: 'block'
        }
    }
};

@withStyles(styles)
@inject('user')
@observer
class UserDataForm extends Component {

    handleChangeSurname = e => {
        this.props.user.setSurname(e.target.value)
    };

    handleChangeName = e => {
        this.props.user.setName(e.target.value)
    };

    handleChangeEmail = e => {
        this.props.user.setEmail(e.target.value)
    };

    startTest = () => {
        if(this.props.user.checkUserData()) this.props.history.push('/test');
    }

    render() {
        const {classes, user} = this.props;

        return <div className={classes.container}>
            {/*<div className={classes.item}>*/}
                <Paper style={{padding: '12px'}}>
                    <div style={{textAlign: "center", marginBottom: '12px'}}>
                        Для прохождения теста введите свои данные
                    </div>
                    <div className={classes.fieldsContainer}>
                        <div className={classes.block + ' ' + classes.block50}>
                            <TextField helperText={!user.surnameFlag && 'Поле Фамилия не должно быть пустым'}
                                       error={!user.surnameFlag}
                                       onChange={this.handleChangeSurname}
                                       fullWidth
                                       variant={'outlined'} label={'Фамилия'} placeholder={'Иванов'}/>
                        </div>
                        <div className={classes.block + ' ' + classes.block50}>
                            <TextField helperText={!user.nameFlag && 'Поле Имя не должно быть пустым'}
                                       error={!user.nameFlag}
                                       onChange={this.handleChangeName} fullWidth
                                       variant={'outlined'} label={'Имя'} placeholder={'Иван'}/>
                        </div>
                    </div>
                    <div className={classes.block}>
                        <TextField helperText={!user.eMailFlag && 'Некорректно введен E-mail'} error={!user.eMailFlag}
                                   onChange={this.handleChangeEmail} fullWidth variant={'outlined'} label={'E-mail'}
                                   placeholder={'ivanov@mail.ru'}/>
                    </div>
                    <div className={classes.block} style={{textAlign: 'center'}}>
                        <Button onClick={this.startTest} className={classes.btn} variant="contained">
                            Начать тестирование
                        </Button>
                    </div>
                </Paper>
            {/*</div>*/}
        </div>;
    }
}

export default withRouter(UserDataForm);