import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
   hl1: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '95%',
        flexShrink: 0,
    },
    hl2: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexGrow: 2,
        textAlign: 'right'
    },
    root: { justifyContent: 'flex-end' },
    width: '100%',
    
}));


const QAPanels = () => {

    const classes = useStyles();
    const [expd, setExpd] = React.useState(0);

    const hChng = (p) => (event, isExpd) => {
        setExpd(isExpd ? p : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expd={expd === 1} onChange={hChng(1)}>
                <AccordionSummary className={classes.root}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p1bh-content"
                    id="p1bh-header"
                >
                    <Typography className={classes.hl1}>Q Why this website? </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                    d1
                </AccordionDetails>
            </Accordion>
            <Accordion expd={expd === 2} onChange={hChng(2)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p2bh-content"
                    id="p2bh-header"
                >
                    <Typography className={classes.hl1}>Q Who are you?</Typography>
                    
                </AccordionSummary>
                <AccordionDetails>
                    d2
                </AccordionDetails>
            </Accordion>
            <Accordion expd={expd === 3} onChange={hChng(3)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p3bh-content"
                    id="p3bh-header"
                >
                    <Typography className={classes.hl1}>Q Where do the numbers come from?</Typography>
                   
                </AccordionSummary>
                <AccordionDetails>
                    
                </AccordionDetails>
            </Accordion>
            <Accordion expd={expd === 4} onChange={hChng(4)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4bh-content"
                    id="p4bh-header"
                >
                    <Typography className={classes.hl1}>Q Why totals by population and not actual numbers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    When you are comparing the pandemic situation in two different locations, if you focus on the actual case numbers it can be misleading. Whilst every case is pertinent and tragic at a personal level, when you are performing comparative analysis it is more beneficial to focus on the prevalence of the problem to come to a clear picture of the difference between locations.  The prevalence is reflected by the number of incidents by the population as a whole.
                    For instance 100,000 cases in India compared to 100,000 cases in the United Kingdom is vastly different in terms of the population affected. India has a population of 1,380,004,385 compared to the UK's population of 67,886,004.  In India the figure of 100,000 cases would only represent approximately 0.007% of the population or about 72 cases per million people. In contrast, 100,000 cases in the UK would represent 1.47% of the population or 14730 cases per million people.  In this example despite each country having equal case loads the situation in the UK in would in fact be over 200 times worse in terms of the population affected.
                    It is for these reasons that we have shown the figures on this site as cases per million people. This allows us to compare locations with widely divergent populations. Comparing locations by actual figures are fair only if the locations have comparable populations. In the above example comparing the UK with India exemplifies this, in that case  you might choose instead limit your analysis to the Indian state of Karnataka which has a similar population to the UK at 67,562,686.
                    If you wish to see actual case figures you can find them easily on the John Hopkins University Site for US and global figures, or at Covid19india.org for detailed Indian figures. In addition the Our World in Data website defaults to a view showing figures by population but you can also  opt to see actual figures there.

                </AccordionDetails>
            </Accordion>
            <Accordion expd={expd === 5} onChange={hChng(5)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4bh-content"
                    id="p4bh-header"
                >
                    <Typography className={classes.hl1}>Q Are the figures accurate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    
                </AccordionDetails>
            </Accordion>
            <Accordion expd={expd === 6} onChange={hChng(6)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4bh-content"
                    id="p4bh-header"
                >
                    <Typography className={classes.hl1}>Q Can I help?</Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default QAPanels;
