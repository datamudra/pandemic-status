import React from "react";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
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
        textAlign: 'right',
        },
    rpaper: {
        textAlign: 'center',
        backgroundColor: '#4c75f210', },
  }));

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
                 
                 <Grid item xs={4} >
                        
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.lpaper} variant='outlined' square={true}>                        
                        <Typography  >   
                        {left.loc} 
                        </Typography>
                        </Paper>                        
                    </ Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.rpaper} variant='outlined' square={true}>                        
                        <Typography  >   
                        {right.loc} 
                        </Typography> 
                        </Paper>
                    </ Grid>
                        <Grid item xs={4}>
                        <Paper className={classes.wpaper} variant='outlined' square={true}>                                               
                            <Typography >   
                            New cases
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.lpaper} variant='outlined' square={true}> 
                            <Typography>
                                {left.wmn} ({left.wdn}% change)
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid items xs={4}> 
                            <Paper className={classes.rpaper} variant='outlined' square={true}> 
                            <Typography>                        
                                {right.wmn} ({right.wdn}% change)
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.wpaper} variant='outlined' square={true}>                                               
                            <Typography >   
                            Tests
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.lpaper} variant='outlined' square={true}>                         
                            <Typography>
                                {left.wmt} ({left.wdt}% change)
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid items xs={4}> 
                            <Paper className={classes.rpaper} variant='outlined' square={true}>
                            <Typography>
                            {right.wmt} ({right.wdt}% change)
                            </Typography>                         
                            </Paper>                           
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.wpaper} variant='outlined' square={true}>                                               
                            <Typography >   
                          Deaths
                            </Typography> 
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.lpaper} variant='outlined' square={true}>
                                <Typography>
                                {left.wmd} ({left.wdd}% change)
                            </Typography>                         
                            </Paper>
                        </Grid>
                        <Grid items xs={4}> 
                            <Paper className={classes.rpaper} variant='outlined' square={true}>
                                <Typography>                                   
                                {right.wmd} ({right.wdd}% change)
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