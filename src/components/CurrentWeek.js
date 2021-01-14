import React from "react";
import { Grid, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({	
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

    
    const CurrentWeek = (props) => {
    const { left, right } = props;
	const classes = useStyles();

	return (
            <div>
                 <br />
                
                 <Accordion defaultExpanded>
                     <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                <Grid item xs= {12}>
                        <Typography >
                            Last 7 Days Totals (Per Million Population)
                        </Typography>
                </Grid> 
                </AccordionSummary>
                <Divider />  
                <AccordionDetails>
                <Grid container direction='row' > 
                 
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
                             {left.loc} 
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lrow} variant='outlined' square={true}> 
                            <Typography>
                                {left.wmn}  <DeltaValue className={classes.ldelta} delta={left.wmd} deltaf='ldelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lrow} variant='outlined' square={true}>
                            <Typography>
                                {left.wmd}  <DeltaValue delta={left.wdd} deltaf='ldelta' />
                            </Typography>                         
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lrow} variant='outlined' square={true}>                         
                            <Typography>
                                {left.wmt}  <DeltaValue delta={left.wdt} deltaf='ldelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.rrow} variant='outlined' square={true}>                                               
                        <Typography >
                             {right.loc} 
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rrow} variant='outlined' square={true}> 
                            <Typography >
                                {right.wmn}  <DeltaValue delta={right.wdn} deltaf='rdelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rrow} variant='outlined' square={true}>
                            <Typography >
                                {right.wmd}  <DeltaValue delta={right.wdd} deltaf='rdelta' />
                            </Typography>                         
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rrow} variant='outlined' square={true}>                         
                            <Typography >
                                {right.wmt}  <DeltaValue delta={right.wdt} deltaf='rdelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                    </ Grid>
                    </ AccordionDetails>
                        
               </ Accordion>
                       
                    
            </div>

);
};

export default CurrentWeek;