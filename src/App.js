import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content"


const App = () =>  {
  return (
    <Grid container direction ="column" >      
      <Grid item> 
        <Header />
      </Grid>
      <Grid item container style={{backgroundColor:' #6c757d10'}}> 
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm= {8}>
          <Content />
        </Grid> 
        <Grid  xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
