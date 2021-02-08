import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    mainBlock: {
        width: '90%',
        margin: '0 auto'
    },
    header: {
        textAlign: 'center',
        fontSize: '22px',
        paddingBottom: '12px'
    },
    item: {
        paddingRight: '4px'
    },
    resultBlock: {
        padding: '12px'
    }
};

@withStyles(styles)
@inject('test')
@observer
class ResultPage extends Component {

    render() {
        const {test, classes} = this.props;
        return <div className={classes.mainBlock}>
            <Paper className={'paper'}>
                <div className={classes.header}>Результат</div>
                {!!test.trust.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Доверие:</span>
                    <span className={classes.item}>{test.trustCount}</span>
                </div>}
                {!!test.autonomy.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Автономия:</span>
                    <span className={classes.item}>{test.autonomyCount}</span>
                </div>}
                {!!test.initiative.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Инициатива:</span>
                    <span className={classes.item}>{test.initiativeCount}</span>
                </div>}
                {!!test.competence.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Компетентность:</span>
                    <span className={classes.item}>{test.competenceCount}</span>
                </div>}
                {!!test.identity.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Идентичность:</span>
                    <span className={classes.item}>{test.identityCount}</span>
                </div>}
                <div style={{padding: '20px 12px 0', textAlign: 'center', fontSize: '18px'}}>Результаты опроса будут
                    высланы Вам на электронную почту.
                </div>
                <div style={{padding: '8px 12px', textAlign: 'center', fontSize: '20px'}}>Благодарим Вас за прохождение
                    опроса!
                </div>
            </Paper>
        </div>
    }
}

export default ResultPage;