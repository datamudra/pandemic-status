import React from "react";
import { Avatar, Button, Chip, CircularProgress,  Divider,  Drawer,  Grid,  InputAdornment,  ListItem,  TextField,  Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import SearchIcon from '@material-ui/icons/Search';
import TabPanels from "./TabPanels";
import useStickySWR from "../hooks/useStickySWR";
import { FixedSizeList as List } from 'react-window';


// const API_ROOT_URL = 'https://github.com/datamudra/api/raw/master';
const API_ROOT_URL = 'https://raw.githubusercontent.com/datamudra/api/master/data';


const useStyles = makeStyles((theme) => ({
  
  chipRow : {
    padding : 7,
    },
  drawRow: {
     padding: 8,
  },
    closeRow: {     
      padding: 4,
  },
  chipR: {
    backgroundColor: '#f4f6ff',
      color: '#36a2eb',
  },
  chipL: {
    backgroundColor: '#fbe5e7',
    color: '#ff6384',
        },
  chipD: {
    fontSize: 18,
  },
  
 lItemEven: {
    backgroundColor: '#f8f8f0',
  },
})); 

const Home = () =>  {
  
  const classes = useStyles();
  const locPlace = 'Choose from list'
  const [L_KEY, setL_KEY] = React.useState('20001');
  const [R_KEY, setR_KEY] = React.useState('20002');
  const [newLoc, setnewLoc] = React.useState(locPlace);
  const [dOpen, setdOpen] = React.useState(false);
  const [lFilter, setlFilter] = React.useState('');
  const [isLeft, setisLeft] = React.useState(true);
  const [fullList, setfullList] = React.useState([]);

 
  const fetcher = (url) => {
    return fetch(url)
      .then((response) => {
        return response.json();
      });
  };

  const { data: R_DATA } = useStickySWR(
    `${API_ROOT_URL}/${R_KEY}.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );
  const { data: L_DATA } = useStickySWR(
    `${API_ROOT_URL}/${L_KEY}.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );
  const { data: M_DATA } = useStickySWR(
    `${API_ROOT_URL}/mdata.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );
 
  const { data: LOCS } = useStickySWR(
    `${API_ROOT_URL}/locs.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );

 const chipDlg = (event, isleft) => {
   setisLeft(isleft);
   toggleDrawer(event, true);
   console.log('isleft=' + isleft);
 }
 
  const handleClose = () => {
    setnewLoc('Choose from list');
    setdOpen(false);
  };

  const handleApply = (event, locKey) => {
    console.log(locKey);
    if (isLeft) {setL_KEY(locKey);}
    else {setR_KEY(locKey);}
    setnewLoc(locPlace);
    toggleDrawer(false)
  }; 
 
  const cList = fullList.filter(loc => loc.toLowerCase().includes(lFilter.toLowerCase()));

  
  const handleFilter = event => {
    setlFilter(event.target.value);
  };

  const toggleDrawer = (event, isOpen) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log('Toggle d1 fulllist len=' + fullList.length + ' LOCS='+ typeof LOCS)
    setlFilter('');
    
    if (fullList.length === 0 && (typeof LOCS != 'undefined')) 
      {console.log('Toggle d2 setting fullList');
      setfullList(Object.keys(LOCS));   
    } 
    setdOpen(isOpen);
  };


  const Row = ({ index, style }) => (
    index % 2 ?
    (<ListItem 
      className={classes.lItemEven}
      alignItems='center'
      button
      divider={true} 
      key={LOCS[cList[index]]}
      onClick={(event) => setnewLoc(cList[index])}             
      style={style}> 
        <Grid container justify='center'>
          <Grid item xs={2} />
          {cList[index]}
          <Grid item xs={2} />
        </Grid>
    </ListItem>)
      : (<ListItem
            alignItems='center'
            button
            divider={true}
            key={LOCS[cList[index]]}
            onClick={(event) => setnewLoc(cList[index])}
            style={style}>
            <Grid container justify='center'>
              <Grid item xs={2} />
              {cList[index]}
              <Grid item xs={2} />
            </Grid>
        </ListItem>)
      
  );
  
  const Loclist = () => (
      <div>
      <List
        role = "presentation"
        height={200}
        itemCount={cList.length}
        itemSize={40}
        width={'100%'}
      >
        {Row}
      </List>
    </div>        
  );
  const locDrawer = (
    <Drawer anchor='bottom' open={dOpen} onClose={(event) => toggleDrawer(event, false)}>

      <Grid container direction='row' justify='space-evenly' spacing={2} className={classes.drawRow} alignItems='center'>
        <Grid item xs={8} >
          <TextField 
            id="filter" 
            label="Type to filter list" 
            variant="outlined"
           onChange={handleFilter} 
            size='small'
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
            }} 
          />
         </Grid>
          
          <Grid item xs={4}>
            <Grid container direction='row' justify='flex-end' spacing={1}>
              <Button
                color="default"
                onClick={(event) => handleApply(event, LOCS[newLoc])}
                startIcon={<DoneIcon />}
                >
                APPLY
              </Button>
            </Grid>
          </Grid>
        </Grid>

      <Grid
        container direction='row'
        justify='center'
        className={classes.drawRow}
      >
        <Chip className={classes.chipD}
          size='medium'
          color='primary'
          label={newLoc}
          />
      </Grid>
        <Divider />
           <Loclist />
        <Divider />
      <Grid container direction="row" justify='flex-end' className={classes.closeRow} >
           <Button
            color="default"
            onClick={(event) => handleClose()}
          startIcon={<CloseIcon />}
          >
          CLOSE
          </Button>
       </Grid>
    </Drawer>
  );

  return (
    
       (L_DATA) && (R_DATA) && (M_DATA)? 
        (<span>
        <Grid container direction='row' justify='center' className={classes.chipRow} >
          <Chip className={classes.chipL}
            avatar={<Avatar variant='square' src={L_DATA.iso === '0' ? process.env.PUBLIC_URL + '/flags/0l.png' : process.env.PUBLIC_URL +`/flags/${L_DATA.iso}.png`} />}
              label={L_DATA.loc}
              variant='outlined'
              clickable
              onClick={(event) => chipDlg(event, true)}
              onDelete={(event) => chipDlg(event, true)}
            deleteIcon={<ExpandMoreIcon />}
            />
            <Grid item xs={1} >
          <Typography align='center'>
              vs
          </Typography>
          </Grid>
          <Chip className={classes.chipR}
            avatar={<Avatar variant='square' src={R_DATA.iso === '0' ? process.env.PUBLIC_URL + '/flags/0r.png' : process.env.PUBLIC_URL + `/flags/${R_DATA.iso}.png` } />}
              label={R_DATA.loc}
              variant='outlined'
              clickable
              onClick={(event) => chipDlg(event, false)}
              onDelete={(event) => chipDlg(event, false)}
          deleteIcon={<ExpandMoreIcon />}
            />
        </Grid> 
        {locDrawer}
          <Grid container direction="row">
            <Grid item xs={12} >
               <TabPanels left={L_DATA} right={R_DATA} meta={M_DATA} />
              <br />
            </Grid> 
          </Grid>
      </span> 
      )
        : (<div><CircularProgress /> </div>)
 );
}

export default Home;
