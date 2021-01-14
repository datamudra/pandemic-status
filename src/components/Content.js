import React from "react";
import DashCard from "./DashCard"
import { Grid } from "@material-ui/core";
import  LineChart  from "./linechart";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {
	M_DATA,
	L_DATA,
	R_DATA,
  } from './constants';
import CurrentWeek from "./CurrentWeek";

  const useStyles = makeStyles((theme) => ({
	root: {
	//   flexGrow: 1,
	},
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	 },
  }));

const Content = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
		<CurrentWeek left={L_DATA} right = {R_DATA} />
		<Grid container spacing={2}>
		
		   <Grid item xs={4}>
			
				<DashCard
					tit={L_DATA.loc} 
					pop={L_DATA.pop}
					c_class = "left" 
				/>
			
		  </Grid>
			<Grid item xs={4}>
			<br/>
			<Paper className={classes.paper} elevation={2} >
			<Typography variant="H5" component="p" align='Center'>    
        	Trends By Population</Typography>
			<Typography>
			(Last 21 Days)
			</Typography>
			
			</Paper>

			</Grid>

		  <Grid item xs={4}>
					<DashCard
						tit={R_DATA.loc} 
						pop={R_DATA.pop} 
						c_class = "right" 
					/>

		 </Grid>
		  <Grid item xs={12}>			
			<Paper className={classes.paper} elevation={3} >
			<Typography variant="H5" component="p" align='Center'>    
        	Covid 19 Daily New Cases Per Million Population
			</Typography>
			  <LineChart 
						labs={M_DATA.dts} 
						datal={L_DATA.tmn}
						datar= {R_DATA.tmn}
						locl = {L_DATA.loc}
						locr = {R_DATA.loc} 
			          	tit={'Covid 19 New Cases'} 
					/>
			</Paper>
          </Grid>  
		  <Grid item xs={12}>
		  
			<Paper className={classes.paper} elevation={3} >
			<Typography variant="H5" component="p" align='Center'>    
        	Covid 19 Daily Deaths Per Million Population
			</Typography>
			  <LineChart 
						labs={M_DATA.dts} 
						datal={L_DATA.tmd}
						datar= {R_DATA.tmd}
						locl = {L_DATA.loc}
						locr = {R_DATA.loc} 
						tit={'Covid 19 Deaths'} 
					/>
			</Paper>
          </Grid> 
		  <Grid item xs={12}>
			<Paper className={classes.paper} elevation={3}>
			<Typography variant="H5" component="p" align='Center'>    
    		Covid 19 Daily Tests Per Million Population
			</Typography>
			
			  <LineChart 
						labs={M_DATA.dts} 
						datal={L_DATA.tmt}
						datar= {R_DATA.tmt}
						locl = {L_DATA.loc}
						locr = {R_DATA.loc} 
						tit={'Covid 19 Tests'} 
					/>
			</Paper>
          </Grid> 
		</Grid>
	  </div>
	
);
};

export default Content;