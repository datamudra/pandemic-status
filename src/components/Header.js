import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
	root: {
			 justifyContent: 'space-between'
				},
}));

const Header = () => {
	const classes = useStyles();

	return(
		<AppBar position='static'>
		<Toolbar className={classes.root} >
		<Typography className ={classes.barItems}> Datamudra </Typography>
		<Typography className ={classes.barTit}>Covid-19 Status Comparison Tool</Typography>
				<DataUsageIcon className={classes.barItems} />
		</Toolbar>
		</AppBar>

	);

};

export default Header;