import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Paper } from '@material-ui/core'; 

const numberFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 1, minimumFractionDigits: 0,
});

const useStyles = makeStyles((theme) => ({
  root: {
      padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
  lrow: {
    textAlign: 'center',
    backgroundColor: '#fbe5e7',
    color: '#ff6384',
    fontSize: 18
  },
  mrow: {
    textAlign: 'center',
  },
  rrow: {
    textAlign: 'center',
    backgroundColor: '#f4f6ff',
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

  return (
    <Box component="span" className={classes[dc]} >
      <Box component="span" className={classes.arrow} >
      {d > 0
        ? '\u25B2' + Math.abs(d)+'%'
        : d < 0
          ? '\u25BC' + Math.abs(d)+'%'
          : ''}
      </Box>
    </Box>
  );
};

const DashCard = props => {
  const { t, ll, rl, rs, ls, rd, ld, isd, isp=false} = props;
	const classes = useStyles();
  return (
  <div>
    <Card >
        <CardContent className={classes.root}>
          <Grid container direction='row' >        
              <Grid item xs={12} >
                <Paper className={classes.mrow} variant='outlined' square={true}>
                  <Typography>
                    {t}
                  </Typography>
                </Paper>
              </ Grid>
            <Grid container className={classes.lrow} >
              <Grid item xs={6} >
                  <Paper className={classes.lrow} variant='outlined' square={true}>
                  <Typography >
                    {ll} 
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}  >
                <Paper className={classes.lrow} variant='outlined' square={true}>
                  <Typography>
                    {ls < 0 ? 'No data' : numberFormatter.format(ls)} {isp & ls>0 ? '%' : ''}  {isd & ls>0 
                            ? <DV className={classes.ld} d={ld} dc='ldc' />
                            : ''}
                  </Typography>
                </Paper>
              </Grid>
            </ Grid >
            <Grid container className={classes.rrow} >
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
                    {rs < 0 ? 'No data' :numberFormatter.format(rs)} {isp & rs>0 ? '%' : ''} {isd & rs>0
                      ? <DV className={classes.rd} d={rd} dc='rdc' />
                      : ''}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
      </CardContent>
    </Card>
  </div>
  );
};

export default DashCard;
