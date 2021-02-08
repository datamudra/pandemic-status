import { Chip, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DashCard from './DashCard';
import { Helmet } from 'react-helmet'

const useStyles = makeStyles(() => ({
    
    tChip: { backgroundColor: 'transparent', },

}));

const AllTime = (props) => {

    const { l, r } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <Helmet>
                <title>All Time Historic Analysis</title>
                <meta name="description" content="Compare the pandemic between locations. Get insight from the full historic picture" />
            </Helmet>
        <Grid container direction='row' spacing={1} >
            <Grid item xs={12} >
                <Typography component='div' align='center'>
                    <Chip
                        className={classes.tChip}
                        label='Numbers are totals per million population'
                    />
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} >
               <DashCard t='Confirmed Cases' 
                        ll={l.loc} 
                        rl={r.loc} 
                        rs={r.amn}
                        ls={l.amn}
                        isd={false}/> 
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Deaths'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.amd}
                    ls={l.amd}
                    isd={false} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Tests'
                    ll={l.tlv}
                    rl={r.tlv}
                    rs={r.amt === 0 ? -1 : r.amt}
                    ls={l.amt === 0 ? -1 : l.amt}
                    isd={false}  />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Vaccinations'
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.amv === 0 ? -1 : r.amv}
                    ls={l.amv === 0 ? -1 : l.amv}
                    isd={false} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Deathrate'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.adr}
                    ls={l.adr}
                    isd={false} 
                    isp={true}/>
            </Grid>
        
        </Grid> 
    </React.Fragment>

    );
};

export default AllTime;
