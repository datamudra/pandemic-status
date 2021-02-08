import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Helmet } from 'react-helmet'

const useStyles = makeStyles(() => ({
   
    aPage: { textAlign: 'center', },
    
}));


const About = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Helmet>
                <title>Contact Datamudra</title>
                <meta name="description" content="Clarity through simple facts. Connect by email for queries" />
        </Helmet>
        <div className={classes.aPage} >
            <div>
                <img src={process.env.PUBLIC_URL + '/logos.png'} alt='Datamudra' width='170' />
            </div>
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
        </React.Fragment>
    );
}

export default About;
