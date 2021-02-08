import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Helmet } from 'react-helmet'

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
    const [expd, setExpd] = React.useState(false);

    const hChng = (p) => (event, isExpanded) => {
        setExpd(isExpanded ? p : false);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>FAQ</title>
                <meta name="description" content="Common queries about this website and the data" />
            </Helmet>
        <div className={classes.root}>
            <Accordion expanded={expd === 1} onChange={hChng(1)}>
                <AccordionSummary className={classes.root}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p1bh-content"
                    id="p1bh-header"
                >
                    <Typography className={classes.hl1}>Q Why this website? </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                    Unless you are an accountant, you might not particularly like looking at a page of figures. 
                    Despite this fact, the onset of the pandemic has forced many of us to resort to looking at figures of tests, new cases, active cases, recoveries, positivity rates, death rates and the like. Never before has so many of the general public resorted to data visualisations and statistical breakdowns. We don't even need to talk about those logarithmic charts - nearly half of the people who see them reportedly can't make heads nor tails of them!
                     Confronted with such a wide variety of data visualisations and statistical analysis has, 
                     even for the most numerate amongst us, resulted in a wave of confusion, misinformation, 
                     leaving many of us more frustrated and disempowered than before. The aim of this website is to clear away some of that confusion and instead provide simple comparative analysis of two geographic locations of your choosing. Perhaps you need to travel to another place for work and need to check the situation there first, or more likely you want to see how things are with some friends and family scattered around the globe. In both cases this website is for you.

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expd === 2} onChange={hChng(2)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p2bh-content"
                    id="p2bh-header"
                >
                    <Typography className={classes.hl1}>Q Who are you?</Typography>
                    
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    I am a concerned individual who like many others have been trying to cope with the impact that coronavirus has had on us all.
                    Having a background in computer science with many years experience building information systems that turn raw data into useful information, 
                    this is a project to showcase how to cut through confusion with simple but clear analysis.
                    </Typography>
                   
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expd === 3} onChange={hChng(3)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p3bh-content"
                    id="p3bh-header"
                >
                    <Typography className={classes.hl1}>Q Where do the numbers come from?</Typography>
                   
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The data is updated daily from freely available feeds from a number of reputable data sources. 
                        Daily data feeds from Johns Hopkins University in the United States, 
                        the Our World in Data project at Oxford University and the Covid19India.org crowdsourced project in India. I have written algorithms that automatically combine this data and transform it in a way that allows the simple presentation of information you can see displayed. Click the Data Source menu item for more details of the sources.

                    </Typography> 
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expd === 4} onChange={hChng(4)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4bh-content"
                    id="p4bh-header"
                >
                    <Typography className={classes.hl1}>Q Why totals by population and not actual numbers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction='column'>
                    <Typography> 
                    When you are comparing the pandemic situation in two different locations, if you focus on the actual case numbers it can be misleading. Whilst every case is pertinent and tragic at a personal level, when you are performing comparative analysis it is more beneficial to focus on the prevalence of the problem to come to a clear picture of the difference between locations.  The prevalence is reflected by the number of incidents by the population as a whole.
                    </Typography>
                    <Typography>
                    For instance 100,000 cases in India compared to 100,000 cases in the United Kingdom is vastly different in terms of the population affected.
                    India has a population of 1,380,004,385 compared to the UK's population of 67,886,004.  
                    In India the figure of 100,000 cases would only represent approximately 0.007% of the population or about 72 cases per million people. 
                    In contrast, 100,000 cases in the UK would represent 1.47% of the population or 14730 cases per million people.  
                    In this example despite each country having equal case loads the situation in the UK would in fact be over 200 times worse in terms of the population affected.
                    </Typography>
                    <Typography>
                    It is for these reasons that we have shown the figures on this site as cases per million people. This allows us to compare locations with widely divergent populations. Comparing locations by actual figures are fair only if the locations have comparable populations.
                    </Typography>
                    <Typography>
                    If you wish to see actual case figures you can find them easily on the John Hopkins University Site for US and global figures, or at Covid19india.org for detailed Indian figures. 
                    In contrast the Our World in Data website defaults to a view showing figures by population but you can also  opt to see actual figures there.
                    </Typography>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expd === 5} onChange={hChng(5)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4bh-content"
                    id="p4bh-header"
                >
                    <Typography className={classes.hl1}>Q Are the figures accurate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    The data I am using is the same data that informs governments and media houses across the globe.
                    The collection of this data is the result of a monumental effort involving the co-operation of hundreds of people all over the globe.
                    If you look closely you will surely find some inconsistencies in the figures. Use these numbers with discretion, they are meant only as a guide.
                    Millions of people have had coronavirus and have not been tested at all. Testing varies widely across the world.
                    I have chosen to use a minimal set of statistics that are most reliable. 
                    Some figures like case recoveries and active cases are omitted as their definitions are neither consistent nor accurate.  
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expd === 6} onChange={hChng(6)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4bh-content"
                    id="p4bh-header"
                >
                    <Typography className={classes.hl1}>Q What locations are available?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction='column'>
                   <Typography>
                    1. United States - all states and counties - data sourced from John Hopkins University
                    </Typography>
                    <Typography>
                    2. India - all states and districts - data sourced from covid19India.org
                    </Typography>
                    <Typography>
                    3. All other countries - country level plus regional breakdown if available -  data sourced from John Hopkins University
                    </Typography>
                        </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expd === 7} onChange={hChng(7)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="p4bh-content"
                    id="p4bh-header"
                >
                    <Typography className={classes.hl1}>Q Can I help?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        I have initially chosen to provide this website freely, without pushing advertising.
                        The site advocates user privacy, and other than counting anonymous page visits we do not collect or manipulate any of your data in any way.
                        You can connect with me by email with any feedback.
                    <a
                            href="mailto:hello@datamudra.com"
                            className={classes.hl1}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MailOutlineIcon fontSize='small' />
                        </a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        </React.Fragment>
    );
}

export default QAPanels;
