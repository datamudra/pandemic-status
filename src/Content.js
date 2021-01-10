import React from "react";
import DashCard from "./DashCard"
import { Grid } from "@material-ui/core";
import  LineChart  from "./linechart";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {
	M_DATA,
	L_DATA,
	R_DATA,
  } from './constants';

  const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
  }));

const Content = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
		<Grid container spacing={3}>
		   <Grid item xs={6}>
			
				<DashCard
					tit={L_DATA.loc} 
					pop={L_DATA.pop}
					c_class = "left" 
				/>

			
		  </Grid>
		  <Grid item xs={6}>
					<DashCard
						tit={R_DATA.loc} 
						pop={R_DATA.pop} 
						c_class = "right" 
					/>

		 </Grid>
		  <Grid item xs={12}>
			<Paper className={classes.paper}>
			  <LineChart 
						labs={M_DATA.dts} 
						datal={L_DATA.tn}
						datar= {R_DATA.tn}
						locl = {L_DATA.loc}
						locr = {R_DATA.loc} 
			          			tit={'Covid 19 +ve last 3 Weeks'} 
					/>
			</Paper>
          </Grid>  
		  <Grid item xs={12}>
			<Paper className={classes.paper}>
			  <LineChart 
						labs={M_DATA.dts} 
						datal={L_DATA.td}
						datar= {R_DATA.td}
						locl = {L_DATA.loc}
						locr = {R_DATA.loc} 
						tit={'Covid 19 deaths last 3 Weeks'} 
					/>
			</Paper>
          </Grid> 
		  <Grid item xs={12}>
			<Paper className={classes.paper}>
			  <LineChart 
						labs={M_DATA.dts} 
						datal={L_DATA.tt}
						datar= {R_DATA.tt}
						locl = {L_DATA.loc}
						locr = {R_DATA.loc} 
						tit={'Covid 19 testing last 3 Weeks'} 
					/>
			</Paper>
          </Grid> 
		</Grid>
	  </div>
		
);
};

export default Content;