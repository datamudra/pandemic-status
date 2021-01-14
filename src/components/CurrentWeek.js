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
	  flexGrow: 1,
	},
	lpaper: {
      textAlign: 'center',
      backgroundColor: '#dc354520', },
    wpaper: {
        textAlign: 'center',
        },
    rpaper: {
        textAlign: 'center',
        backgroundColor: '#4c75f210', },
    paper: {
            textAlign: 'center',
            backgroundColor: '#4c75f210', },
            rdelta : { color : '#36a2eb'},
            ldelta : { color :'#ff6384'},
  }));

const DeltaValue = (props) => {
    const { delta, deltaf} = props;
    const classes = useStyles();

    return ( <Box component="span" className={classes[deltaf]} fontSize="body2.fontSize"> 
            {delta > 0
                ? '\u2191'+  delta + '%'
                : delta < 0
                ? '\u2193' +  Math.abs(delta) +'%'
                : ''}
                 </Box>
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
                        <Typography   >
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
                        <Paper className={classes.wpaper} variant='outlined' square={true}>                        
                        <Typography>
                        New Cases
                        </Typography>
                        </Paper>            
                    </ Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.wpaper} variant='outlined' square={true}>                        
                        <Typography>
                        Deaths
                        </Typography> 
                        </Paper>
                    </ Grid>

                    <Grid item xs={3} >
                        <Paper className={classes.wpaper} variant='outlined' square={true}>                        
                        <Typography>
                        Tests
                        </Typography> 
                        </Paper>
                    </ Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.lpaper} variant='outlined' square={true}>                                               
                        <Typography className={classes['ldelta']}>
                             {left.loc} 
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lpaper} variant='outlined' square={true}> 
                            <Typography className={classes['ldelta']}>
                                {left.wmn}  <DeltaValue delta={left.wmd} deltaf='ldelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lpaper} variant='outlined' square={true}>
                            <Typography className={classes['ldelta']}>
                                {left.wmd}  <DeltaValue delta={left.wdd} deltaf='ldelta' />
                            </Typography>                         
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.lpaper} variant='outlined' square={true}>                         
                            <Typography className={classes['ldelta']}>
                                {left.wmt}  <DeltaValue delta={left.wdt} deltaf='ldelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                        <Paper className={classes.rpaper} variant='outlined' square={true}>                                               
                        <Typography className={classes['rdelta']}>
                             {right.loc} 
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rpaper} variant='outlined' square={true}> 
                            <Typography className={classes['rdelta']}>
                                {right.wmn}  <DeltaValue delta={right.wdn} deltaf='rdelta' />
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rpaper} variant='outlined' square={true}>
                            <Typography className={classes['rdelta']}>
                                {right.wmd}  <DeltaValue delta={right.wdd} deltaf='rdelta' />
                            </Typography>                         
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.rpaper} variant='outlined' square={true}>                         
                            <Typography className={classes['rdelta']}>
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