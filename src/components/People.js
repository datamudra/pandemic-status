import { Chip, Grid, Typography } from '@material-ui/core';
import React from 'react';
import DashCard from './DashCard';

const People = (props) => {

    const { l, r } = props;
    
    return (
        <Grid container direction='row' spacing={1} >
            <Grid item xs={12} spacing={1}>
                <Typography component='div' align='center'>
                    <Chip
                        label={'Country level demographic data'}
                        variant='outlined'
                    />
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Population Aged Over 65 years'
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.p65}
                    ls={l.p65}
                    isd={false}
                    isp={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Population Aged Over 70 years'
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.p70}
                    ls={l.p70}
                    isd={false}
                    isp={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Hospital Beds Per Thousand People'
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.hos}
                    ls={l.hos}
                    isd={false} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Life Expectancy'
                    ll={l.l1}
                    rl={r.l1}
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
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.ppd}
                    ls={l.ppd}
                    isd={false}
                    isb={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Median Age'
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.med}
                    ls={l.med}
                    isd={false} />
            </Grid>
           
        </Grid> 
            );
};

export default People;
