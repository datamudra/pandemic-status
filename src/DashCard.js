import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';

const useStyles = makeStyles({
   bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  right : { backgroundColor :'#4c75f210' ,color : '#36a2eb'},
  left : { backgroundColor : '#dc354520', color :'#ff6384'},
  title: {
    fontSize: 25
  },
  pos: {
    marginBottom: 12,
  },
});

const DashCard = props => {
  const { tit, pop, c_class} = props;
	const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <br/>
    <Card className={classes[c_class]}>
      <CardContent >
        <Typography variant="h5" component="h2" align = 'center'>
          {tit} = <TimelineRoundedIcon className={classes[c_class]}  />  
        </Typography>
        
      </CardContent>
    </Card>
    </div>
  );
};

export default DashCard;
