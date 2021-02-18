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
    },
    text: {
        padding: '4px 0 0',
        textAlign: 'justify'
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
                    <span className={classes.item}> {test.trustCount}</span>
                    <div className={classes.text}>{test.trust}</div>
                </div>}
                {!!test.autonomy.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Автономия:</span>
                    <span className={classes.item}> {test.autonomyCount}</span>
                    <div className={classes.text}>{test.autonomy}</div>
                </div>}
                {!!test.initiative.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Инициатива:</span>
                    <span className={classes.item}> {test.initiativeCount}</span>
                    <div className={classes.text}>{test.initiative}</div>
                </div>}
                {!!test.competence.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Компетентность:</span>
                    <span className={classes.item}> {test.competenceCount}</span>
                    <div className={classes.text}>{test.competence}</div>
                </div>}
                {!!test.identity.length && <div className={classes.resultBlock}>
                    <span style={{paddingRight: '8px'}}>Идентичность:</span>
                    <span className={classes.item}> {test.identityCount}</span>
                    <div className={classes.text}>{test.identity}</div>
                </div>}
                <div style={{padding: '8px 12px', textAlign: 'center', fontSize: '20px'}}>Благодарим Вас за прохождение
                    опроса!
                </div>
            </Paper>
        </div>
    }
}

export default ResultPage;