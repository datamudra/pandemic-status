import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Trend21 from "./trend21";
import AllTime from "./alltime";
import Demographics from "./demographics";
import CurrentWeekCards from "./CurrentWeekCards";


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

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
                    <Typography>{children}</Typography>
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
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexGrow: 2,
        textAlign: 'right'
    },
    root: { justifyContent: 'flex-end' },
  
}));


const TabPanels = (props) => {

    const { left, right, meta } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="This Week" {...a11yProps(0)} />
                    <Tab label="3 Week Trends" {...a11yProps(1)} />
                    <Tab label="Full History" {...a11yProps(2)} />
                    <Tab label="The People" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
       
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <CurrentWeekCards l={left} r={right} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Trend21 l={left} r={right} m={meta} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <AllTime l={left} r={right} m={meta} />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Demographics left={left} right={right} meta={meta} />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

export default TabPanels;
