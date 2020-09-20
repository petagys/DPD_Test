import React, {Component, Fragment} from 'react';
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import {UserInfoStore, TestStore} from "./stores/index";
import {configure} from "mobx";
import {Provider} from "mobx-react";

const stores = (window.mobxStores = {
    user: UserInfoStore,
    test: TestStore
});

configure({
    enforceActions: "observed"
});

class App extends Component {
    render() {
        return <Fragment>
            <Provider {...stores}>
                <Header title={'Дифференциал психосоциального развития'}/>
                <Main />
            </Provider>
        </Fragment>
    }
}

export default App;