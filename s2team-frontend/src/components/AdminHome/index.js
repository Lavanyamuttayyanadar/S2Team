import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      opacity:0.8,
      marginTop: "25%",
    },
  }));

let AdminHome = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h5>
                <center>
                    Main DashBoard will be comming here.
                </center>
            </h5>
        </div>
    )
}
export default AdminHome;