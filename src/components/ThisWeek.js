import { Chip, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DashCard from './DashCard';
import RestoreIcon from '@material-ui/icons/Restore';
import { Helmet } from 'react-helmet'

const useStyles = makeStyles((theme) => ({
    tChip: {
        backgroundColor: 'transparent', 
    },
    chipRow: {
        marginTop: 4,
    },

}));

const ThisWeek = (props) => {

    const { l, r, m} = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Helmet>
                <title>Pandemic Check &amp; Compare</title>
                <meta name="description" content="A powerful website to check and compare the current status of the pandemic in any two places in the world. Choose from over 4500 locations to get the latest details. Datamudra provides clarity through simple facts." />
            </Helmet>
       <Grid container spacing={0}>
            <Grid item xs={12} className={classes.chipRow}>
                <Typography component='div' align='center'>
                    <Chip
                        size='small'
                        label={'7 day period ('+m.wr+')'}
                        variant='outlined'
                    />
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography component='div' align='center'>
                    <Chip
                        className={classes.tChip}
                        label='Numbers are totals per million population'
                    />
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
                    rs={r.wmt===0 ? -1 : r.wmt}
                    ls={l.wmt === 0 ? -1 : l.wmt}
                    ld={l.wdt} rd={r.wdt} isd={true} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Vaccinations'
                    ll={l.l1}
                    rl={r.l1}
                    rs={r.wmv === 0 ? -1 : r.wmv}
                    ls={l.wmv === 0 ? -1 : l.wmv}
                    ld={l.wdv} rd={r.wdv} isd={true} />
            </Grid> 
                <Grid item xs={12}>
                    <Typography component='div' align='center'>
                        <Chip
                            icon={<RestoreIcon />}
                            label={m.ut}
                            variant='outlined'
                            size='small'
                        />
                    </Typography>
                </Grid> 
                
        </Grid> 
           
        </Grid>
    </React.Fragment>

    );
};

export default ThisWeek;
