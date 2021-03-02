import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import { Table, TableCell, TableHead, TableRow, withStyles, TableBody } from '@material-ui/core';

const styles = {
    info: {
        color: '#C6C6C6',
        fontSize: '12px'
    },
    block: {
        paddingBottom: '8px'
    },
    td: {
        textAlign: 'right',
        fontSize: '18px'
    },
    right: {
        textAlign: 'right',
        '@media (max-width: 900px)': {
            display: 'none'
        }
    },
    tdMob: {
        '@media (min-width: 901px)': {
            display: 'none'
        }
    }
};

@withStyles(styles)
@inject('answer')
@observer
class TableResults extends Component {
    constructor(props){
        super(props);
        const {classes} = props;
        this.tableHead = [
            {
                name: 'Тестируемый'
            },
            {
                name: 'Дата'
            },
            {
                name: 'Доверие',
                className: classes.right
            },
            {
                name: 'Компетенция',
                className: classes.right
            },
            {
                name: 'Автономия',
                className: classes.right
            },
            {
                name: 'Идентичность',
                className: classes.right
            },
            {
                name: 'Инициативность',
                className: classes.right
            },
            {
                name: 'Результаты',
                className: classes.tdMob
            }
        ]
    }

    renderColor = (number=undefined) => {
        if(number < 3.5){
            return '#D63A42'
        }else if(number >= 3.5 && number <= 4.5){
            return '#E4964F'
        }else if(number > 4.5 ){
            return '#5FA473'
        }
        return '#222222'
    };


    render(){
        const {answer, classes} = this.props;
        if(!answer.answers.length){
            return null;
        }
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        {this.tableHead.map(({name, className}, i) => <TableCell className={className} key={i}>
                            {name}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Array.isArray(answer.answers) && !!answer.answers.length && answer.answers.map(item => {
                            const {results} = item;
                            return <TableRow key={item.date}>
                                <TableCell>
                                    <div className={classes.block}>
                                        <div className={classes.info}>Фамилия и имя:</div>
                                        <div>{`${item.surname} ${item.name}`}</div>
                                    </div>
                                    <div>
                                        <div className={classes.info}>E-mail:</div>
                                        <div>{item.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {item.date}
                                </TableCell>
                                <TableCell className={`${classes.td} ${classes.right}`} style={{color: this.renderColor(results.trust)}}>
                                    {results.trust}
                                </TableCell>
                                <TableCell className={`${classes.td} ${classes.right}`} style={{color: this.renderColor(results.competence)}}>
                                    {results.competence}
                                </TableCell>
                                <TableCell className={`${classes.td} ${classes.right}`} style={{color: this.renderColor(results.autonomy)}}>
                                    {results.autonomy}
                                </TableCell>
                                <TableCell className={`${classes.td} ${classes.right}`} style={{color: this.renderColor(results.identity)}}>
                                    {results.identity}
                                </TableCell>
                                <TableCell className={`${classes.td} ${classes.right}`} style={{color: this.renderColor(results.initiative)}}>
                                    {results.initiative}
                                </TableCell>
                                <TableCell className={classes.tdMob} style={{color: this.renderColor(results.initiative)}}>
                                <div className={classes.block}>
                                    <div className={classes.info}>Доверие: <span style={{color: this.renderColor(results.trust)}}>
                                        {results.trust}
                                    </span></div>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.info}>Компетенция: <span style={{color: this.renderColor(results.competence)}}>
                                        {results.competence}
                                    </span></div>
                                    
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.info}>Автономия: <span style={{color: this.renderColor(results.autonomy)}}>
                                        {results.autonomy}
                                    </span></div>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.info}>Идентичность: <span style={{color: this.renderColor(results.identity)}}>
                                        {results.identity}
                                    </span></div>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.info}>Инициативность: <span style={{color: this.renderColor(results.initiative)}}>
                                        {results.initiative}
                                    </span></div>
                                </div>
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        );
    }
}

export default TableResults;