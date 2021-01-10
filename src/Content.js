import React from "react";
import DashCard from "./DashCard"
import { Grid } from "@material-ui/core";
import  LineChart  from "./linechart";
import {
	M_DATA,
	L_DATA,
	R_DATA,
  } from './constants';
  
const Content = () => {
	
	return (
		<Grid container_spacing = {2}>
		<Grid container spacing ={2}>
			<Grid item xs={6}>
				<DashCard 
					tit={L_DATA.loc} 
					pop={L_DATA.pop} 
				/>
			</Grid>
			<Grid item xs={6}>
				<DashCard 
					tit={R_DATA.loc} 
					pop={R_DATA.pop} 
				/>
			</Grid>	
		</Grid>		
		<Grid container spacing ={2}>
			<Grid item xs={6}>
				<LineChart 
					labs={M_DATA.dts} 
					datap={L_DATA.tn}
					loc = {L_DATA.loc} 
					tit={'Covid 19 +ve last 3 Weeks'} 
				/>
			</Grid>
			<Grid item xs={6}>
				<LineChart 
						labs={M_DATA.dts} 
						datap={R_DATA.tn}
						loc = {R_DATA.loc} 
						tit={'Covid 19 +ve last 3 Weeks'} 
					/>
			</Grid>			
		</Grid>
		<Grid container spacing ={2}>
			<Grid item xs={6}>
				<LineChart 
					labs={M_DATA.dts} 
					datap={L_DATA.td}
					loc = {L_DATA.loc} 
					tit={'Deaths last 3 Weeks'} 
				/>
			</Grid>
			<Grid item xs={6}>
				<LineChart 
						labs={M_DATA.dts} 
						datap={R_DATA.td}
						loc = {R_DATA.loc} 
						tit={'Deaths last 3 Weeks'} 
					/>
			</Grid>			
		</Grid>
		<Grid container spacing ={2}>
			<Grid item xs={6}>
				<LineChart 
					labs={M_DATA.dts} 
					datap={L_DATA.tt}
					loc = {L_DATA.loc} 
					tit={'Tests last 3 Weeks'} 
				/>
			</Grid>
			<Grid item xs={6}>
				<LineChart 
						labs={M_DATA.dts} 
						datap={R_DATA.tt}
						loc = {R_DATA.loc} 
						tit={'Test last 3 Weeks'} 
					/>
			</Grid>			
		</Grid>
		</Grid>
);
};

export default Content;