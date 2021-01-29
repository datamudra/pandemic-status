import { Grid } from '@material-ui/core';
import React from 'react';
import DashCard from './DashCard';


const CurrentWeekCards = (props) => {

    const { l, r} = props;

    return (
        <Grid container direction='row' spacing={1} >
            <Grid item xs={12} sm={6} >
                <DashCard t='Positive Cases'
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
            </Grid><Grid item xs={12} sm={6} >
                <DashCard t='Tests'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.wmt}
                    ls={l.wmt}
                    ld={l.wdt} rd={r.wdt} isd={true} />
            </Grid>
        </Grid>

    );
};

export default CurrentWeekCards;
