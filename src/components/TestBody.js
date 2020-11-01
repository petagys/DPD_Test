import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Paper from "@material-ui/core/Paper/Paper";
import Questions from "./Questions";

@inject('user')
@observer
class TestBody extends Component {

    render() {

        return <div style={{width: '95%', margin: '0 auto'}}>
            <Paper className={'paper'}>
                    <div style={{textAlign: 'center', fontSize: '22px'}}>Правила прохождени теста</div>
                    <p style={{lineHeight: '22px', textIndent: '20px', textAlign: 'justify'}}>
                        Ниже приведены пары понятий противоположных по смыслу.
                        Вам необходимо определить какой полюс каждой из пар больше соответствует лично вам.
                        Цифры между ними означают степень такого соответствия (3 –полностью соответствует; 2 – в целом
                        соответствует; 1 – скорее такой, чем противоположный).
                    </p>
                    {/*<span style={{color: '#DA2F34'}}>Внимание! Шкалы пропускать нельзя.</span>*/}
                <Questions />
            </Paper>
        </div>
    }
}

export default TestBody;