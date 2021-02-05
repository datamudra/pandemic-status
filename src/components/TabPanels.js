import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Trend21 from "./Trend21";
import AllTime from "./AllTime";
import ThisWeek from "./ThisWeek";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import People from "./People";
import ReactGA from 'react-ga';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component='div'> {children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-tabs-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
  tabsu: { borderBottom: '1px solid #9e9e9e',}
  
}));

const tabs=['thisweek', '3weeks','history','people'];

const TabPanels = (props) => {

    const { left, right, meta } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        ReactGA.pageview(tabs[newValue]);
    };

   
    return (
    <div>
       <AppBar position="static" color="transparent" elevation={0}>
                <Tabs className={classes.tabsu}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full tabs"
                >
                    <Tab label="This Week" {...a11yProps(0)} />
                    <Tab label="3 Week Trends" {...a11yProps(1)} />
                    <Tab label="Full History" {...a11yProps(2)} />
                      <Tab label="The People" {...a11yProps(3)} /> 
                </Tabs>
            </AppBar>
  
                <TabPanel value={value} index={0} dir={theme.direction}>
                 <ThisWeek l={left} r={right} m={meta}/> 
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                      <Trend21 l={left} r={right} m={meta} /> 
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <AllTime l={left} r={right} m={meta} /> 
                </TabPanel>
                 <TabPanel value={value} index={3} dir={theme.direction}>
                  <People l={left} r={right} m={meta} /> 
                </TabPanel> 
        </div>
    );
}

export default TabPanels;
