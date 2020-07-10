import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('user')
@observer
class TestBody extends Component {

    render() {

        return <div>
            test
        </div>
    }
}

export default TestBody;