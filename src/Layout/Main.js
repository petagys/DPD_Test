import React, {Component} from 'react';
import UserDataForm from "../components/UserDataForm";
import {inject, observer} from "mobx-react";
import TestBody from "../components/TestBody";

@inject('user')
@observer
class Main extends Component {

    render() {

        return <div>
            {!this.props.user.dataChecked ? <TestBody /> : <UserDataForm />}
        </div>
    }
}

export default Main;