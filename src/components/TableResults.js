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
    }
};

@withStyles(styles)
@inject('answer')
@observer
class TableResults extends Component {
    constructor(){
        super();
        this.tableHead = [
            {
                name: 'Тестируемый'
            },
            {
                name: 'Дата'
            },
            {
                name: 'Доверие',
                style: {
                    textAlign: 'right',
                }
            },
            {
                name: 'Компетенция',
                style: {
                    textAlign: 'right',
                }
            },
            {
                name: 'Автономия',
                style: {
                    textAlign: 'right',
                }
            },
            {
                name: 'Идентичность',
                style: {
                    textAlign: 'right',
                }
            },
            {
                name: 'Инициативность',
                style: {
                    textAlign: 'right',
                }
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
                        {this.tableHead.map(({name, style}, i) => <TableCell style={style} key={i}>
                            {name}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        answer.answers.map(item => {
                            const {results} = item;
                            return <TableRow key={item.date}>
                                <TableCell>
                                    <div className={classes.block}>
                                        <div className={classes.info}>Фамилия и имя:</div>
                                        <div>{`${item.surname} ${item.name}`}</div>
                                    </div>
                                    <div>
                                        <div className={classes.info}>E-mail:</div>
                                        <div>{`${item.surname} ${item.name}`}</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {item.date}
                                </TableCell>
                                <TableCell className={classes.td} style={{color: this.renderColor(results.trust)}}>
                                    {results.trust}
                                </TableCell>
                                <TableCell className={classes.td} style={{color: this.renderColor(results.competence)}}>
                                    {results.competence}
                                </TableCell>
                                <TableCell className={classes.td} style={{color: this.renderColor(results.autonomy)}}>
                                    {results.autonomy}
                                </TableCell>
                                <TableCell className={classes.td} style={{color: this.renderColor(results.identity)}}>
                                    {results.identity}
                                </TableCell>
                                <TableCell className={classes.td} style={{color: this.renderColor(results.initiative)}}>
                                    {results.initiative}
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