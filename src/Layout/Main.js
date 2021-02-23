import React, {Component, Fragment} from 'react';
import UserDataForm from "../components/UserDataForm";
import {inject, observer} from "mobx-react";
import TestBody from "../components/TestBody";
import ResultPage from "../components/ResultPage";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import '../css/main.css'
import { withStyles } from '@material-ui/core';

const styles = {
    link: {
        textDecoration: 'none',
        color: '#00adfe',
        fontSize: '16px'
    },
    img: {
        maxWidth: '360px',
    //     '@media (min-width: 1280px)': {
    //         maxWidth: '360px'
    //     },
    //     '@media (min-width: 1024px) and (max-width: 1279px)':{
    //         maxWidth: '320px'
    //     },
    //     '@media (min-width: 768px) and (max-width: 1023px)':{
    //         margin: '0 3px'
    //     },
    //     '@media (max-width: 767px)':{
    //         margin: '0'
    //     },
    }
};

@withStyles(styles)
@inject('user')
@observer
class Main extends Component {

    render() {
        const {classes} = this.props;
        return <Fragment>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={UserDataForm} />
                    <Route path={'/test'} component={TestBody} />
                    <Route path={'/result'} component={ResultPage} />
                    <Route path={'*'} render={() => {
                        return <div style={{textAlign: 'center'}}>
                            <img className={classes.img} src='/images/404.svg' alt='404' />
                            <h2>Страница не найдена :(</h2>
                            <Link className={classes.link} to={'/'}>
                                <span>Перейти на главную страницу</span>
                            </Link>
                        </div>
                    }} />
                </Switch>
            </Router>
        </Fragment>
    }
}

export default Main;