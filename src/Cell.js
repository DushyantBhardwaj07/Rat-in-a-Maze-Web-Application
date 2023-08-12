import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import './index.css';
import { Button, makeStyles } from '@material-ui/core';

const styles1 = {
    paper: {
      background: "#4CAF50",
    }
};
  
const styles2 = {
    paper: {
      background: "#FF5757",
    }
};

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

function Cell(props) { 
    if(props.N == 0) {
      return(<RedCell></RedCell>);      
    }
  
    else if(props.N == 1) {
      return(<GreenCell></GreenCell>)
    }
  
    else {
      return(<WhiteCell></WhiteCell>);
    }      
}
  
function WhiteCell() {
  return (
    <Grid item>
    <Paper elevation={3}>
      <Box padding={2} height={50} width = {50} >              
                  
      </Box>
    </Paper> 
    </Grid>    
    );
}
  
function RedCell() {
  const classes = useStyles2();
      return (
          <Grid item>
          <Paper className={classes.paper} elevation={3}>
            <Box padding={2} height={50} width = {50} >                       
            </Box>
          </Paper> 
          </Grid>    
      );
}
  
function GreenCell() {
    const classes = useStyles1();
        return (
            <Grid item>
            <Paper className={classes.paper} elevation={3}>
              <Box padding={2} height={50} width = {50} >                       
              </Box>
            </Paper> 
            </Grid>    
        );
}

export default Cell;