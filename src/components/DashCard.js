import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import { Box, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    //   flexGrow: 1,
  },
  lrow: {
    textAlign: 'center',
    backgroundColor: '#dc354520',
    color: '#ff6384',
    fontSize: 18
  },
  mrow: {
    textAlign: 'center',
  },
  rrow: {
    textAlign: 'center',
    backgroundColor: '#4c75f210',
    color: '#36a2eb',
    fontSize: 18,
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  rdc: { color: '#36a2eb', fontSize: 11, fontWeight: 'bold' },
  ldc: { color: '#ff6384', fontSize: 11, fontWeight: 'bold' },
  arrow: {
    fontSize: 10,
  },
  
}));

const DV = (props) => {
  const { d, dc } = props;
  const classes = useStyles();

  return (<Box component="span" className={classes[dc]} >
    <Box component="span" className={classes.arrow} >
      {d > 0
        ? '\u25B2'
        : d < 0
          ? '\u25BC'
          : ''}
    </Box>{d === 0 ? '' : Math.abs(d)}%</Box>
  );
};

const DashCard = props => {
  const { t, ll, rl, rs, ls, rd, ld, isd} = props;
	const classes = useStyles();
  const bull = <span> • </span>;

  return (
  <div>
    <Card /* raised={true} */>
      <CardContent>
           <Grid container direction='row' >
           <Grid item xs={12} >
              <Paper className={classes.mrow} variant='outlined' square={true}>
                <Typography>
                  {t}
                </Typography>
              </Paper>
            </ Grid>
            <Grid item xs={6} >
              <Paper className={classes.lrow} variant='outlined' square={true}>
                <Typography >
                  {ll}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.lrow} variant='outlined' square={true}>
                <Typography>
                  {ls}  {isd 
                          ? <DV className={classes.ld} d={ld} dc='ldc' />
                          : ''}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} >
              <Paper className={classes.rrow} variant='outlined' square={true}>
                <Typography >
                  {rl}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.rrow} variant='outlined' square={true}>
                <Typography>
                  {rs}  {isd
                    ? <DV className={classes.rd} d={rd} dc='rdc' />
                    : ''}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
      </CardContent>
    </Card>
  </div>
  );
};

export default DashCard;
