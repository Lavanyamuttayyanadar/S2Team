import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ConstRouts from '../../Constants/ConstRouts';
import './index.css'

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

let Login = ()=>{
    const [UserName,SetUserName] = useState("");
    const [Password,SetPassword] = useState("");
    const classes = useStyles();
    return(
        <div className="LoginBack">
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={2} lg={4}></Grid>
                    <Grid item xs={8} lg={4}>
                        <Paper className={classes.paper}>
                            <h2>S2Team Admin</h2>
                            <form onSubmit={(e)=>{
                                e.preventDefault();
                                if(UserName==="Admin" && Password === "S2TeamAdmin"){
                                    localStorage.setItem("Auth",`{"usertype":"Admin"}`);
                                    window.location.href=ConstRouts.Admin.Home;
                                } 
                                else if(UserName === "User1" && Password === "S2TeamSubAdmin")
                                {
                                    localStorage.setItem("Auth",`{"usertype":"SubAdmin"}`);
                                    window.location.href=ConstRouts.Admin.SubAdmin
                                }
                                    
                            }}>
                                <TextField
                                size = "medium"
                                label="Username"
                                variant="outlined"
                                margin="normal"
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                style={{width:"70%"}}
                                onChange={(e)=>{SetUserName(e.target.value)}}
                                value={UserName}
                                required
                                />
                                <TextField
                                type= "password"
                                size = "medium"
                                label= "Password"
                                variant="outlined"
                                margin="normal"
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                style={{width:"70%"}}
                                onChange={(e)=>{SetPassword(e.target.value)}}
                                value={Password}
                                required
                                />
                                <br/><br/>
                                <Button variant="contained" color="primary" type="submit">
                                    Login
                                </Button>
                            </form>
                        </Paper>
                        
                    </Grid>
                    <Grid item xs={2} lg={4}></Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Login;