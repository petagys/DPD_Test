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
import TableFooter from "@material-ui/core/TableFooter/TableFooter";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";

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

@withStyles(styles)
@inject('test')
@observer
class Questions extends Component {
    constructor(props) {
        super(props);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        // this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleChangeRadio(e, i) {
        console.log(e.target.name, e.target.value, i)
    };

    // handleChangePage(event, newPage){
    //     if(event) this.props.test.changePage(newPage)
    // };

    render() {
        const {classes, test} = this.props;
        return <div style={{marginTop: '24px'}}>
            {/*<FormControl component="fieldset">*/}
            {/*    <RadioGroup aria-label="gender" name="gender1">*/}
            {/*        <FormControlLabel value="female" control={<Radio />} label="Female" />*/}
            {/*        <FormControlLabel value="male" control={<Radio />} label="Male" />*/}
            {/*        <FormControlLabel value="other" control={<Radio />} label="Other" />*/}
            {/*        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />*/}
            {/*    </RadioGroup>*/}
            {/*</FormControl>*/}
            <Table>
                <TableBody>
                    {test.questions.map((item, i) => {
                        return <TableRow key={item.number+1}>
                            <TableCell className={classes.block}>
                                {item.number+1}
                            </TableCell>
                            <TableCell className={classes.block}>
                                {item.q1}
                            </TableCell>
                            <TableCell className={classes.block}>
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        onChange={(e) => this.handleChangeRadio(e, item.number)}
                                        row name={item.trait}>
                                        {item.count ?
                                            <Fragment>
                                                <FormControlLabel style={{margin: 0}}
                                                                  labelPlacement="top"
                                                                  value={'1'}
                                                                  control={<Radio
                                                    size={'small'}
                                                    classes={{
                                                        root: classes.radio,
                                                        checked: classes.checked
                                                    }}/>}
                                                                  label={3}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'2'}
                                                                  control={<Radio
                                                                      size={'small'}
                                                                      classes={{
                                                                          root: classes.radio,
                                                                          checked: classes.checked
                                                                      }}
                                                                  />} label={2}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'3'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'4'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={0}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'5'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'6'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={2}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'7'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={3}/>
                                            </Fragment>
                                            :
                                            <Fragment>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'7'} control={<Radio
                                                    size={'small'}
                                                    classes={{root: classes.radio, checked: classes.checked}}/>}
                                                                  label={3}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'6'}
                                                                  control={<Radio
                                                                      size={'small'}
                                                                      classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked}}
                                                                  />} label={2}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'5'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'4'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={0}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'3'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={1}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'2'}
                                                                  control={<Radio size={'small'} classes={{
                                                                      root: classes.radio,
                                                                      checked: classes.checked
                                                                  }}/>} label={2}/>
                                                <FormControlLabel style={{margin: 0}} labelPlacement="top" value={'1'}
                                                                  control={<Radio size={'small'} classes={{
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
                {/*<TableFooter>*/}
                {/*    <TableRow>*/}
                {/*        <TablePagination*/}
                {/*            rowsPerPageOptions={[]}*/}
                {/*            count={test.questions.length}*/}
                {/*            rowsPerPage={test.rowsPerPage}*/}
                {/*            page={test.page}*/}
                {/*            labelDisplayedRows={({ from, to, count }) => {return from + ' - ' + to + ' из ' + count}}*/}
                {/*            // SelectProps={{*/}
                {/*            //     inputProps: { 'aria-label': 'rows per page' },*/}
                {/*            //     native: true,*/}
                {/*            // }}*/}
                {/*            onChangePage={this.handleChangePage}*/}
                {/*        />*/}
                {/*    </TableRow>*/}
                {/*</TableFooter>*/}
            </Table>
        </div>
    }
}

export default Questions;