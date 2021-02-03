import React from "react";
import { AppBar, Box,  Grid,  Toolbar, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import InfoIcon from '@material-ui/icons/Info';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Home from "./components/Home";
import QAPanels from "./components/QAPanels";

function TabPanel(props) {
	const { children, sidx, idx, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={sidx !== idx}
			id={`p-tbi-${idx}`}
			aria-labelledby={`p-tb-${idx}`}
			{...other}
		>
			{sidx === idx && (
				<Box p={1}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	idx: PropTypes.any.isRequired,
	sidx: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1,
	},
	barTit: { fontWeight: 'bold',
		textAlign: 'center'},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	tBar: {
		justifyContent: 'space-between',
	},
	aPage : { textAlign: 'center',},

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	content: {
		flexGrow: 1,
		padding: theme.spacing(0),
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
}));

const drawerWidth = 180;

const App = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mO, setMO] = React.useState(false);
	const hMT = () => {
		setMO(!mO);
	};
	const [sidx, setsidx] = React.useState(0);

	const hLIC = (event, idx) => {
		setsidx(idx);
		if (mO) {
			
			hMT()};
	};

	const drawer = (
		<div>
			<div/>
			<img src='logos.png' alt='Datamudra' width='170' />
			<Divider />
			<List>
				<ListItem 
					button key='Home'
					selected={sidx === 0} 
					onClick={(event) => hLIC(event,0)} >
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItem>
				<ListItem 
					button key='Data Sources' 
					selected={sidx === 1}  
					onClick={(event) => hLIC(event, 1)}>
					<ListItemIcon>
						<DataUsageIcon />
					</ListItemIcon>
					<ListItemText primary='Data Sources' />
				</ListItem>
				<ListItem 
					button key='FAQ' 
					selected={sidx === 2} 
					onClick={(event) => hLIC(event, 2)}>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText primary='FAQ' />
				</ListItem>
				<ListItem 
				button key='Contact' 
				selected={sidx === 3} 
					onClick={(event) => hLIC(event, 3)}>
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText primary='Contact' />
				</ListItem>
			</List>
			<Divider />
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;


	return(
		<div className={classes.root}>
		<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
		<Toolbar className={classes.tBar} >
		<Grid container direction='row' justify='space-evenly' alignItems='center'>
			<Grid item xs={11} md={12} >
							<Typography className={classes.barTit}>COVID-19 STATUS : CHECK AND COMPARE</Typography>
			</Grid>
			<Grid item xs={1} >	
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={hMT}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
			</Grid>
		</Grid>
		</Toolbar>
		</AppBar>
			<nav className={classes.drawer} aria-label="app pgs">
				<Hidden mdUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mO}
						onClose={hMT}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true,
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<div className={classes.content}>
				<TabPanel sidx={sidx} idx={0}>
					<div className={classes.toolbar} />						
					<Home /> 
				</TabPanel>
				<TabPanel sidx={sidx} idx={1}>				
					<div className={classes.toolbar} />
					Datasource
      			</TabPanel>
				<TabPanel sidx={sidx} idx={2}>
					<div className={classes.toolbar} />
					<QAPanels />
      			</TabPanel>
					<TabPanel sidx={sidx} idx={3}>
					<div className={classes.toolbar} />
					<div className={classes.aPage} >
					<Typography>
						<img src='logos.png' alt='Datamudra' width='170' />	
					</Typography>
					<Typography>
						"Clarity through simple facts"
					</Typography>
					<br />
					<a
							href="mailto:hello@datamudra.com"
							className="mail"
							target="_blank"
							rel="noopener noreferrer"
						>
					<MailOutlineIcon />
					</a>
					<Typography>
					Email for queries or feedback
					</Typography>

					</div>
      			</TabPanel>
			</div>
	</div>	
	);

};

export default App;