import React from "react";
import { Grid, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({	
    root: {
	//   flexGrow: 1,
	},
	lrow: {
      textAlign: 'center',
      backgroundColor: '#dc354520',
        color: '#ff6384', 
        fontSize: 18  },
    mrow: {
        textAlign: 'center',
        },
    rrow: {
        textAlign: 'center',
        backgroundColor: '#4c75f210',
        color: '#36a2eb', 
        fontSize: 18, },
    paper: {
            textAlign: 'center',
            backgroundColor: '#4c75f210', },

    rdelta: { color: '#36a2eb', fontSize: 11, fontWeight: 'bold' },
    ldelta: { color: '#ff6384', fontSize: 11, fontWeight: 'bold' },
    arrow: {
         fontSize: 10, 
          },
}));


const DeltaValue = (props) => {
    const { delta, deltaf} = props;
    const classes = useStyles();

    return ( <Box component="span" className={classes[deltaf]} >
        <Box component="span" className={classes.arrow} > 
            {delta > 0
                ? '\u25B2'
                : delta < 0
                    ? '\u25BC'
                    : ''}
                </Box>{delta === 0 ? '' : Math.abs(delta)}%</Box>
           );
    };

    
    const CurrentWeekGrid = (props) => {
    const { l, r } = props;
	const classes = useStyles();

	return (
            <div>
                <br />
               
                <Grid container direction='row' spacing = {2}> 
                 
                    <Grid item xs={3} >   
                    </Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.mrow} variant='outlined' square={true}>                        
                        <Typography>
                        New Cases
                        </Typography>
                        </Paper>            
                    </ Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.mrow} variant='outlined' square={true}>                        
                        <Typography>
                        Deaths
                        </Typography> 
                        </Paper>
                    </ Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.mrow} variant='outlined' square={true}>                        
                        <Typography>
                        Tests
                        </Typography> 
                        </Paper>
                    </ Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.lrow} variant='outlined' square={true}>                                               
                        <Typography >
                             {l.loc} 
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lrow} variant='outlined' square={true}> 
                            <Typography>
                                {l.wmn}  <DeltaValue className={classes.ldelta} delta={l.wmd} deltaf='ldelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lrow} variant='outlined' square={true}>
                            <Typography>
                                {l.wmd}  <DeltaValue delta={l.wdd} deltaf='ldelta' />
                            </Typography>                         
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lrow} variant='outlined' square={true}>                         
                            <Typography>
                                {l.wmt}  <DeltaValue delta={l.wdt} deltaf='ldelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.rrow} variant='outlined' square={true}>                                               
                        <Typography >
                             {r.loc} 
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rrow} variant='outlined' square={true}> 
                            <Typography >
                                {r.wmn}  <DeltaValue delta={r.wdn} deltaf='rdelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rrow} variant='outlined' square={true}>
                            <Typography >
                                {r.wmd}  <DeltaValue delta={r.wdd} deltaf='rdelta' />
                            </Typography>                         
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rrow} variant='outlined' square={true}>                         
                            <Typography >
                                {r.wmt}  <DeltaValue delta={r.wdt} deltaf='rdelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                    </ Grid>
             </div>      

);
};

export default CurrentWeekGrid;