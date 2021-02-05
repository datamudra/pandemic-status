import React, { useEffect }  from "react";
import { AppBar, Box,  Chip,  Grid,  Toolbar, Typography} from "@material-ui/core";
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
import ReactGA from 'react-ga';

import Home from "./components/Home";
import QAPanels from "./components/QAPanels";
import DSPanels from "./components/DSpanels";
import About from "./components/About";

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
					<Typography component='div'>{children}</Typography>
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
	barTit: { 
		// fontWeight : 900,
		textAlign: 'center'},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	barChip: { borderColor: '#fbe5e7',
		color: 'white',},
	appBar: {
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	tBar: {
		justifyContent: 'space-between',
	},
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
const pages = ['home', 'datasources', 'FAQ', 'contact']

const App = (props) => {

	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mO, setMO] = React.useState(false);
	const [L_LOC, setL_LOC] = React.useState('20001');
	const [R_LOC, setR_LOC] = React.useState('20002');

	const hMT = () => {
		setMO(!mO);
	};
	const [sidx, setsidx] = React.useState(0);
	const hLIC = (event, idx) => {
		setsidx(idx);
		ReactGA.pageview(pages[idx]);
		if (mO) {
			
			hMT()};

	};

	const drawer = (
		<div>
			<div/>
			<img src={process.env.PUBLIC_URL + '/logos.png'} alt='Datamudra' width='170' />		
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

	useEffect(() => {
		// Runs once, after mounting
		ReactGA.initialize('UA-188843494-1');
		console.log('called GA UA-188843494-1');
		ReactGA.pageview(pages[0]);
	}, []);

	return(
		<div className={classes.root}>
		<CssBaseline />
			<AppBar position='fixed' className={classes.appBar} >
		<Toolbar className={classes.tBar} >
		<Grid container direction='row' justify='space-evenly' alignItems='center'>
			<Grid item xs={11} md={12} >
							<Typography className={classes.barTit} variant="caption" display="block">
								COVID-19 STATUS : CHECK &amp; COMPARE
							</Typography>
							<Grid item xs={12}>
								<Typography component='div' align='center' >
									<Chip className={classes.barChip}
										label='Choose from over 4500 global locations'
										variant='outlined'
										size='small'
									/>
								</Typography>
							</Grid>
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
					<Home L_KEY={L_LOC} R_KEY={R_LOC} setL_KEY={setL_LOC} setR_KEY={setR_LOC} /> 
				</TabPanel>
				<TabPanel sidx={sidx} idx={1}>				
					<div className={classes.toolbar} />
					<DSPanels />
      			</TabPanel>
				<TabPanel sidx={sidx} idx={2}>
					<div className={classes.toolbar} />
					<QAPanels />
      			</TabPanel>
					<TabPanel sidx={sidx} idx={3}>
					<div className={classes.toolbar} />
					<About />
      			</TabPanel>
			</div>
	</div>	
	);

};

export default App;