import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

let ConfigForm = () => {
    const classes = useStyles();
    const data = `
    {
      "District":{
        type:"DropDown",
        keys:["Nandyala","Nizamabad"],
        next:
            {
                "Nandyala":{
                  "constituencies":{
                      keys:["Const1","Const2"],
                      next:{
                          "Const1":{
                              keys:["Ward1","Ward2"],
                              next:{
                                "Ward1":{
                                  keys:[{Name:"Chinna Swamy",MobileNo:"8688116388"},{Name:"Nagendra",MobileNo:"8096214139"},{Name:"Raj Kumar",MobileNo:"7989216085"},{Name:"Sunil",MobileNo:"7661983683"},{Name:"Suresh",MobileNo:"7799833500"},{Name:"Meena",MobileNo:"9553740882"}]
                                },
                                "Ward2":{
                                  keys:[]
                                },
                              }
                          },
                          "Const2":{
                              keys:["Ward3","Ward4"],
                              next:{
                                "Ward3":{
                                  keys:[]
                                },
                                "Ward4":{
                                  keys:[]
                                },
                              }
                          }
                      }
                  }
                },
                "Nizamabad":{
                  "constituencies":{
                      keys:["Const3","Const4"],
                      next:{
                          "Const3":{
                              keys:["Ward5","Ward6"],
                              next:{
                                "Ward5":{
                                  keys:[]
                                },
                                "Ward6":{
                                  keys:[]
                                },
                              }
                          },
                          "Const4":{
                              keys:["Ward7","Ward8"],
                              next:{
                                "Ward7":{
                                  keys:[]
                                },
                                "Ward8":{
                                  keys:[]
                                },
                              }
                          }
  
                      }
                  }
                }
            }
      }
    }
    `;
    return(
    <div className={classes.root}>
      <TextField
          style={{width:"98%"}}
          id="standard-multiline-flexible"
          label="Config Data"
          multiline
          rowsMax={25}
          value={data}
        />
    </div>
    );
}

export default ConfigForm;