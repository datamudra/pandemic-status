import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, Chip, Grid } from "@material-ui/core";
import { Helmet } from 'react-helmet'

const useStyles = makeStyles((theme) => ({
   
   hl1: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '95%',
        flexShrink: 0,
    },
    root: { justifyContent: 'flex-end' },
    cardR: {
        textAlign: 'center',
    },
    width: '100%',
    
}));


const DSPanels = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Helmet>
                <title>Data Sources</title>
                <meta name="description" content="Data is refreshed daily. These are the sources of that data." />
            </Helmet>
        <Grid container className={classes.root} direction='row' justify='center' spacing={1}>
            <Grid item xs={12}>
                <Typography component='div' align='center' >
                    <Chip 
                        label='Data Is refreshed daily from:'
                        variant='outlined'
                        size='small'
                    />
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Card raised={true} >
            <CardContent>
                    <Grid container direction='column' alignItems='center' spacing={2} >
                    <Grid item xs={12}>
                    <Chip   
                                    avatar={<Avatar variant='square' src={process.env.PUBLIC_URL + "/flags/US.png"} />}
                            label='Johns Hopkins University'
                            variant='outlined'
                            size='small'
                        />   
                    </Grid>
                    <Typography variant="body2">
                        The&nbsp;
                        <a
                                href="https://github.com/CSSEGISandData/COVID-19"
                                target="_blank"
                                rel="noopener noreferrer">
                                COVID-19 Data Repository
                        </a>&nbsp;

                        by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University.

                    </Typography>
                </Grid>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12}>
                <Card raised={true} >
                    <CardContent>
                        <Grid container direction='column' alignItems='center' spacing={2} >
                            <Grid item xs={12}>
                            <Chip
                                    avatar={<Avatar variant='square' src={process.env.PUBLIC_URL +"/flags/IN.png"} />}
                                label='Covid-19 India Org'
                                size='small'
                                variant='outlined'
                            />
                            </Grid>
                            <Typography variant="body2"> The &nbsp;
                            <a
                                href="https://api.covid19india.org"
                                target="_blank"
                                rel="noopener noreferrer">
                                    COVID-19 India Org data repository
                        </a>&nbsp;
                          from the covid19india Data Operations Group.

                    </Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} >
                <Card raised={true} >
                    <CardContent>
                        <Grid container direction='column' alignItems='center' spacing={2}  >
                            <Grid item xs={12}>
                            <Chip
                                    avatar={<Avatar variant='square' src={process.env.PUBLIC_URL +"/flags/GB.png"} />}
                                label='Our World In Data'
                                size='small'
                                variant='outlined'
                            />
                            </Grid>
                            <Typography variant="body2">
                                    The&nbsp;
                     <a
                                        href="https://api.covid19india.org"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                    Our World In Data (OWID) data repository
                        </a> &nbsp;  from the University of Oxford.
                         </Typography>
                                <Typography variant="body2" >
                                        The OWID testing dataset is sourced from:
                        </Typography>
                                <Typography variant="body2">
                                        Hasell, J., Mathieu, E., Beltekian, D. et al.&nbsp;

                        <a
                                            href="https://doi.org/10.1038/s41597-020-00688-8"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            A cross-country database of COVID-19 testing
                        </a>
                        . Sci Data 7, 345 (2020).
                        </Typography>

                    
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Typography component='div' variant="body2" align='center'>
                    Data cited above has been freely released under a
                    &nbsp; 
                    </Typography> 
                    <Typography variant="body2" align='center'>
                        <a
                            href="https://creativecommons.org/licenses/by/4.0/"
                            target="_blank"
                            rel="noopener noreferrer">
                            creative commons 4.0 license
                        </a>
                    </Typography>       
                 
            </Grid>        
       </Grid>
       </React.Fragment>
       
    );
}

export default DSPanels;
