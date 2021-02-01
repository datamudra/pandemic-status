import { Chip, Grid, Typography } from '@material-ui/core';
import React from 'react';
import DashCard from './DashCard';
import RestoreIcon from '@material-ui/icons/Restore';


const ThisWeek = (props) => {

    const { l, r, m} = props;

    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Typography align='center'>
                    Numbers are totals per million population
                </Typography> 
            </Grid>
            <Grid item xs={12}>
                <Typography align='center' gutterBottom >
                    7 day time period ({m.wr})
                </Typography>
            </Grid>
        <Grid container direction='row' spacing={1} >
            <Grid item xs={12} sm={6} >
                <DashCard t='Confirmed Cases'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.wmn}
                    ls={l.wmn}
                    ld={l.wdn}  rd={r.wdn} isd={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Deaths'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.wmd}
                    ls={l.wmd}
                    ld={l.wdd} rd={r.wdd} isd={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Tests'
                    ll={l.tlv}
                    rl={r.tlv}
                    rs={r.wmt==0 ? -1 : r.wmt}
                    ls={l.wmt == 0 ? -1 : l.wmt}
                    ld={l.wdt} rd={r.wdt} isd={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Vaccinations'
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.wmv == 0 ? -1 : r.wmv}
                    ls={l.wmv == 0 ? -1 : l.wmv}
                    ld={l.wdv} rd={r.wdv} isd={true} />
            </Grid> 
                <Grid item xs={12}>
                    <Typography align='center'>
                        <Chip
                            icon={<RestoreIcon />}
                            label={m.ut}
                            variant='outlined'
                        />
                    </Typography>
                </Grid>
                
        </Grid>
           
        </Grid>

    );
};

export default ThisWeek;
