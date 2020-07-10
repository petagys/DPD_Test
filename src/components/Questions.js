import React, {Component, Fragment} from 'react';
import {inject, observer} from "mobx-react";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import FormControl from "@material-ui/core/FormControl/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import questions from '../utils/questions'

const styles = {
    block: {
        padding: '12px',
        fontFamily: 'Helvetica'
    },
    radio: {
        '&$checked': {
            color: '#4B8DF8'
        }
    },
    checked: {}
};

@inject('user')
@observer
@withStyles(styles)
class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quests: questions
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        console.log(e.target.name, e.target.value)
    };

    render() {
        const {classes} = this.props;
        return <div style={{marginTop: '24px'}}>
            <Table>
                {/*<TableHead>*/}
                {/*    <TableRow>*/}
                {/*        <TableCell className={classes.block} style={{width: '10%'}}>*/}
                {/*            №*/}
                {/*        </TableCell>*/}
                {/*        <TableCell className={classes.block} style={{width: '25%'}}>*/}
                {/*            Понятие 1*/}
                {/*        </TableCell>*/}
                {/*        <TableCell className={classes.block} style={{width: '40%'}}>*/}
                {/*            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>*/}
                {/*                <div style={{padding: '0 9px'}}>3</div>*/}
                {/*                <div style={{padding: '0 9px'}}>2</div>*/}
                {/*                <div style={{padding: '0 9px'}}>1</div>*/}
                {/*                <div style={{padding: '0 9px'}}>0</div>*/}
                {/*                <div style={{padding: '0 9px'}}>1</div>*/}
                {/*                <div style={{padding: '0 9px'}}>2</div>*/}
                {/*                <div style={{padding: '0 9px'}}>3</div>*/}
                {/*            </div>*/}
                {/*        </TableCell>*/}
                {/*        <TableCell className={classes.block} style={{width: '25%'}}>*/}
                {/*            Понятие 2*/}
                {/*        </TableCell>*/}
                {/*    </TableRow>*/}
                {/*</TableHead>*/}
                <TableBody>
                    {questions.map((item, i) => {
                        console.log(item.q1);
                        return <TableRow key={i}>
                            <TableCell className={classes.block}>
                                {i + 1}
                            </TableCell>
                            <TableCell className={classes.block}>
                                {item.q1}
                            </TableCell>
                            <TableCell className={classes.block}>
                                <FormControl component="div">
                                    <RadioGroup onChange={this.handleChange} row name={item.trait}>
                                        {item.count ? <Fragment>
                                                <FormControlLabel labelPlacement="top" value={1} control={<Radio
                                                    classes={{root: classes.radio, checked: classes.checked}}/>} label={3}/>
                                                <FormControlLabel labelPlacement="top" value={2}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={2}/>
                                                <FormControlLabel labelPlacement="top" value={3}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel labelPlacement="top" value={4}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={0}/>
                                                <FormControlLabel labelPlacement="top" value={5}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel labelPlacement="top" value={6}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={2}/>
                                                <FormControlLabel labelPlacement="top" value={7}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={3}/>
                                            </Fragment>
                                            :
                                            <Fragment>
                                                <FormControlLabel labelPlacement="top" value={7} control={<Radio
                                                    classes={{root: classes.radio, checked: classes.checked}}/>}
                                                                  label={3}/>
                                                <FormControlLabel labelPlacement="top" value={6}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={2}/>
                                                <FormControlLabel labelPlacement="top" value={5}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel labelPlacement="top" value={4}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={0}/>
                                                <FormControlLabel labelPlacement="top" value={3}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel labelPlacement="top" value={2}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={2}/>
                                                <FormControlLabel labelPlacement="top" value={1}
                                                                  control={<Radio classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={3}/>
                                            </Fragment>
                                        }
                                    </RadioGroup>
                                </FormControl>
                            </TableCell>
                            <TableCell className={classes.block}>
                                {item.q2}
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
            {/*<div>*/}
            {/*    <div style={{display: 'flex'}}>*/}

            {/*        <div className={classes.block} style={{width: '10%'}}>*/}
            {/*            №*/}
            {/*        </div>*/}
            {/*        <div className={classes.block} style={{width: '25%'}}>*/}
            {/*            Понятие 1*/}
            {/*        </div>*/}
            {/*        <div className={classes.block}*/}
            {/*            style={{width: '40%', display: 'flex', justifyContent: 'space-evenly'}}>*/}
            {/*            <div>3</div>*/}
            {/*            <div>2</div>*/}
            {/*            <div>1</div>*/}
            {/*            <div>0</div>*/}
            {/*            <div>1</div>*/}
            {/*            <div>2</div>*/}
            {/*            <div>3</div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.block} style={{width: '25%'}}>*/}
            {/*            Понятие 2*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*    {questions.map((item, i) => {*/}
            {/*        console.log(item.q1)*/}
            {/*        return <div key={i} style={{display: 'flex'}}>*/}
            {/*            <div className={classes.block} style={{width: '10%'}}>*/}
            {/*                {i+1}*/}
            {/*            </div>*/}
            {/*            <div className={classes.block} style={{width: '25%'}}>*/}
            {/*                {item.q1}*/}
            {/*            </div>*/}
            {/*            <div className={classes.block}*/}
            {/*                 style={{width: '40%', display: 'flex', justifyContent: 'space-evenly'}}>*/}

            {/*            </div>*/}
            {/*            <div className={classes.block} style={{width: '25%'}}>*/}
            {/*                {item.q2}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    })}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    }
}

export default Questions;