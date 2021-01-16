import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import { makeStyles } from '@material-ui/core/styles';

import {
  M_DATA,
  L_DATA,
  R_DATA,
} from './components/constants';
import AccordPanels from "./components/AccordPanels";


const useStyles = makeStyles(() => ({
  root: {
     backgroundColor: '#6c757d10' 
  },
}));

const App = () =>  {
  const classes = useStyles();
  return (
    <Grid container direction ="column" className={classes.root} >     
      <Grid item> 
        <Header />
      </Grid>
      <Grid container> 
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm= {10}>
          <br />
          <AccordPanels left={L_DATA} right={R_DATA} meta={M_DATA} />
          <br />
        </Grid> 
        <Grid  xs={0} sm={1} />
      </Grid>
    </Grid>
 
  );
}

export default App;
