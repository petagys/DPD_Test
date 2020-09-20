import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    header: {
        fontSize: '28px',
        backgroundColor: '#0C5DFF',
        color: '#ffffff',
        padding: '12px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px',
        justifyContent: 'center'
    }
};

@withStyles(styles)
class Header extends Component {
    render() {
        const {classes, title} = this.props;

        return <div className={classes.header}>
            {title}
        </div>;
    }
}

export default Header;