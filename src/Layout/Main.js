import React, {Component, Fragment} from 'react';
import UserDataForm from "../components/UserDataForm";
import {inject, observer} from "mobx-react";
import TestBody from "../components/TestBody";
import ResultPage from "../components/ResultPage";
import '../css/main.css'

@inject('user')
@observer
class Main extends Component {

    render() {
        return <Fragment>
            {this.props.user.content === 'reg' && <UserDataForm />}
            {this.props.user.content === 'test' && <TestBody />}
            {this.props.user.content === 'result' && <ResultPage />}
        </Fragment>
    }
}

export default Main;