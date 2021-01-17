import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        //   flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(0),
        textAlign: 'center',
    },
    details: { backgroundColor: '#6c757d10' }
}));

const Demographics = (props) => {

    const { left, right, meta } = props;
    const classes = useStyles();

    return (
       <div>
            <Typography> We the people </Typography>
            <Typography> For the people </Typography>
            <Typography> By the people </Typography>
            <Typography> Only the people </Typography>
        </div>
            );
};

export default Demographics;
