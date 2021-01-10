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
  right : { backgroundColor : 'rgb(54, 162, 235)'},
  left : { backgroundColor : 'rgb(255, 99, 132)'},
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
    <Card className={classes[c_class]}>
      <CardContent >
        <Typography className={classes.title}  gutterBottom>
          Current Status
        </Typography>
        <Typography variant="h5" component="h2" align = 'center'>
          {bull}{tit}{bull}
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
