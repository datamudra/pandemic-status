import React from "react";
import { Avatar, Chip, Grid, Typography } from "@material-ui/core";
import Header from "./components/Header";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  M_DATA,
  L_DATA,
  R_DATA,
} from './components/constants';
// import AccordPanels from "./components/AccordPanels";
import TabPanels from "./components/TabPanels";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#6c757d10',
    display: 'flex',
    },
    // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
  chipRow : {
    display : 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexGrow: 1,
    '& > *': {
    margin: theme.spacing(1),
    },
}
})); 

const App = () =>  {
  const classes = useStyles();
  
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
     <div className={classes.root}>
      <Header/>
        <div className={classes.content}>
          <div className={classes.toolbar}/>
          <div className={classes.chipRow} >
          <Chip
            avatar={<Avatar>{L_DATA.loc.charAt(0)}</Avatar>}
              label={L_DATA.loc}
              variant='outlined'
              clickable
              deleteable
              color="secondary"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<ExpandMoreIcon />}
            />
        
          <Typography align='center'>
              v
          </Typography>
          
          <Chip
              avatar={<Avatar>{R_DATA.loc.charAt(0)}</Avatar>}
              label={R_DATA.loc}
              variant='outlined'
              clickable
              color="primary"
              onClick={handleClick}
              onDelete={handleDelete}
              deleteIcon={<ExpandMoreIcon />}
            />
          </div>
          <Grid container direction="row">

            <Grid item xs={12} >
              {/* <AccordPanels left={L_DATA} right={R_DATA} meta={M_DATA} /> */}
              <TabPanels left={L_DATA} right={R_DATA} meta={M_DATA} />
              <br />
            </Grid> 
          </Grid>
        </div>
    </div>

     
 
  );
}

export default App;
