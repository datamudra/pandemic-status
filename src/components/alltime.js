import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import LineChart from "./linechart";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        //   flexGrow: 1,
    },
    paper: {
         padding: theme.spacing(2),
        textAlign: 'center',
    },
    details: { backgroundColor: '#6c757d10' }
}));

const AllTime = (props) => {

    const { left, right, meta } = props;
    const classes = useStyles();

    return (
            
        <Grid container direction='row'>
            <Grid item xs={12} sm={6} >
                <Paper className={classes.paper} elevation={3} >
                    <Typography component="p" align='Center'>
                        Active Cases
                    </Typography>
                    <LineChart
                        labs={meta.dts}
                        datal={left.tma}
                        datar={right.tma}
                        locl={left.loc}
                        locr={right.loc}
                        tit={'Covid 19 Active Cases'}
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} >
                <Paper className={classes.paper} elevation={3} >
                    <Typography component="p" align='Center'>
                        New Cases
                    </Typography>
                <LineChart
                        labs={meta.dts}
                        datal={left.tmn}
                        datar={right.tmn}
                        locl={left.loc}
                        locr={right.loc}
                        tit={'Covid 19 New Cases'}
                    />
                </Paper>
            </Grid>
        </Grid>            

    );
};

export default AllTime;
