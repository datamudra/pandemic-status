import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
	typographyStyles: {
		flex: 1
	}

}));

const Header = () => {
	const classes = useStyles();

	return(
		<AppBar position='static'>
		<Toolbar>
		<Typography className ={classes.typographyStyles}> Datamudra Corona Comparison Tool</Typography>
		<DataUsageIcon />
		</Toolbar>
		</AppBar>

	);

};

export default Header;