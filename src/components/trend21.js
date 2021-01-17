import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import LineChart from "./linechart";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root: {
        //   flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(0),
        textAlign: 'center',
    },
	details: { backgroundColor: '#6c757d10' }
}));

const Trend21 = (props) => {
      
    const  {l, r ,m} = props;
    const classes = useStyles();

    return (
		<Grid container direction='row' spacing={1}>
			<Grid item xs={12} sm={6} >			
				<Paper className={classes.paper} elevation={3} >
				<Typography component="p" align='Center'>    
				Active Cases
				</Typography>
				<LineChart 
							labs={m.dts} 
							datal= {l.tma}
							datar= {r.tma}
							locl =  {l.loc}
							locr = {r.loc} 
							tit={'Covid 19 Active Cases'} 
						/>
				</Paper>
			</Grid>  
			<Grid item xs={12} sm={6} >
						<Paper className={classes.paper} elevation={3} >
							<Typography component="p" align='Center'>
								New Cases
				</Typography>
							<LineChart
								labs={m.dts}
								datal= {l.tmn}
								datar={r.tmn}
								locl= {l.loc}
								locr={r.loc}
								tit={'Covid 19 New Cases'}
							/>
						</Paper>
					</Grid>

			<Grid item xs={12} sm={6}>
				<Paper className={classes.paper} elevation={3} >
				<Typography  component="p" align='Center'>    
				Deaths
				</Typography>
				<LineChart 
							labs={m.dts} 
							datal= {l.tmd}
							datar= {r.tmd}
							locl =  {l.loc}
							locr = {r.loc} 
							tit={'Covid 19 Deaths'} 
						/>
				</Paper>
          	</Grid> 
			<Grid item xs={12} sm={6}>
				<Paper className={classes.paper} elevation={3}>
				<Typography  component="p" align='Center'>    
				Tests
				</Typography>				
				<LineChart 
							labs={m.dts} 
							datal= {l.tmt}
							datar= {r.tmt}
							locl =  {l.loc}
							locr = {r.loc} 
							tit={'Covid 19 Tests'} 
						/>
				</Paper>
			</Grid> 
		</Grid>
   );
};

export default Trend21;
