import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default class Copyright extends Component {

    render(){
        return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="Kit-Kat.com">
            Kit-Kat.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        );
    }
}