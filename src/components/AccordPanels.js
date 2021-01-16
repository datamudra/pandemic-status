import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CurrentWeek from "./CurrentWeek";
import Trend21 from "./trend21";
import AllTime from "./alltime";
import Demographics from "./demographics";
import CurrentWeekCards from "./CurrentWeekCards";

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'flex-end',
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
         flexBasis: '33.33%',
         flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexGrow : 2,
        textAlign : 'right'
    },
   
}));


const AccordPanels = (props) => {

    const { left, right, meta } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className={classes.root}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Last 7 days totals by population</Typography>
                    <Typography className={classes.secondaryHeading}>(figures per million people)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CurrentWeekCards l={left} r={right} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Last 3 weeks trends by population</Typography>
                    <Typography className={classes.secondaryHeading}>
                        (figures per million people)
          </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Trend21 l={left} r={right} m={meta} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>All time totals by population</Typography>
                    <Typography className={classes.secondaryHeading}>
                        (figures per million people)
          </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AllTime l={left} r={right} m={meta} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Demographic Data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Demographics left={left} right={right} meta={meta} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordPanels;
