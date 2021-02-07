import React, { useEffect } from "react";
import { makeStyles} from '@material-ui/core/styles';
import Trend21 from "./Trend21";
import AllTime from "./AllTime";
import ThisWeek from "./ThisWeek";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import People from "./People";

import {
    Switch,
    Route,
    Link,
    useLocation,

} from "react-router-dom";


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-tabs-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
  tabsu: { borderBottom: '1px solid #9e9e9e',}
  
}));

const tabs=['/', '/3weeks','/history','/people'];

const TabPanels = (props) => {

    const { left, right, meta } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
   
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const location = useLocation();

    useEffect(() => {
        if (tabs.indexOf(location.pathname) > -1) {
            setValue(tabs.indexOf(location.pathname));
            // console.log('seting tab value to' + tabs.indexOf(location.pathname) );
        }

    }, [location]);

   return (
    <div>
        <AppBar position="static" color="transparent" elevation={0}>
                <Tabs className={classes.tabsu}
                    value={value}
                    // onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full tabs"
                >
                    <Tab component={Link} to={tabs[0]} label="This Week" {...a11yProps(0)} />
                    <Tab component={Link} to={tabs[1]} label="3 Week Trends" {...a11yProps(1)} />
                    <Tab component={Link} to={tabs[2]} label="Full History" {...a11yProps(2)} />
                    <Tab component={Link} to={tabs[3]} label="The People" {...a11yProps(3)} /> 
                </Tabs>
            </AppBar>
            <Switch >
                <Route
                    exact
                   path={tabs[0]}
                    key={0}
                >
                <ThisWeek l={left} r={right} m={meta} />
                </Route>
                <Route
                    exact
                   path={tabs[1]}
                    key={1}>
                <Trend21 l={left} r={right} m={meta} /> 
                </Route>
                <Route
                    exact
                    path={tabs[2]}
                    key={2}>
                    <AllTime l={left} r={right} m={meta} /> 
                </Route>
                <Route
                    exact
                    path={tabs[3]}
                    key={3}>
                    <People l={left} r={right} m={meta} /> 
                </Route>
            </Switch> 
        </div>
    );
}

export default TabPanels;
