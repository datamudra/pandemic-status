import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
   bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DashCard = props => {
  const { tit, pop} = props;
	const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          Current Status
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}{tit}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">    
        </Typography>
        <Typography variant="body2" component="p">
        Population = {pop} 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashCard;
