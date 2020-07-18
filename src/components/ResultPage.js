import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Paper from "@material-ui/core/Paper/Paper";


@inject('test')
@observer
class ResultPage extends Component {

    render() {
        const {test} = this.props;
        return <div style={{width: '90%', margin: '0 auto'}}>
            <Paper className={'paper'} style={{width: '100%'}}>
                <div style={{textAlign: 'center', fontSize: '22px', paddingBottom: '12px'}}>Результат</div>
                <div>
                    <span style={{paddingRight: '8px'}}>Доверие:</span>
                    {test.trust.map((item, i) => {
                        return <span key={i}>{item.number + "(" + item.value + ");"}</span>;
                    })}
                </div>
            </Paper>
        </div>
    }
}

export default ResultPage;