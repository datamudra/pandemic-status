import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashCard from './DashCard';


const useStyles = makeStyles((theme) => ({
    root: {
           display: 'flex',
           justifyContent:'space-between'
    },
    paper: {
        // padding: theme.spacing(0),
        textAlign: 'center',
    },
    // details: { backgroundColor: '#6c757d10' }
}));

const Demographics = (props) => {

    const { l, r, m } = props;
    const classes = useStyles();

    return (
        <Grid container direction='row' spacing={1} >
            <Grid item xs={12} sm={6} >
                <DashCard t='Population Aged Over 65 years'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.p65}
                    ls={l.p65}
                    isd={false}
                    isp={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Population Aged Over 70 years'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.p70}
                    ls={l.p70}
                    isd={false}
                    isp={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Hospital Beds Per Thousand People'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.hos}
                    ls={l.hos}
                    isd={false} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Life Expectancy'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.exp}
                    ls={l.exp}
                    isd={false} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Total Population'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.pop}
                    ls={l.pop}
                    isd={false} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Population Density'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.ppd}
                    ls={l.ppd}
                    isd={false}
                    isb={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Median Age'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.med}
                    ls={l.med}
                    isd={false} />
            </Grid>
           
        </Grid> 
            );
};

export default Demographics;
