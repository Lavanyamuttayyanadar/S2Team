import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import '@inovua/reactdatagrid-community/theme/blue-light.css';


const data = {
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
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 210,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
let SubAdmin = ()=>{   
    const classes = useStyles();
    const [Dist,SetDist] = useState("");
    const [Constituencies,SetConstituencies] = useState("");
    const [Ward,SetWard] = useState("");
    const [Name,SetName] = useState("");
    const [TempVal,SetTempVal] = useState("");
    function edit({value}){
      SetTempVal(value);
      return(
        <TextField
                                    size = "small"
                                    variant="outlined"
                                    margin="normal"
                                    inputProps={{style: {fontSize: 10}}} // font size of input text
                                    InputLabelProps={{style: {fontSize: 10}}} // font size of input label
                                    style={{width:"100%"}}
                                    value={TempVal}
                                    onChange={(e)=>{SetTempVal(e.target.value)}}
                                    required
                                    />
                    
      )
    }
    function DropDown(topvalue){
      return(
      <Select
          labelId="District"
          id="District"
          value={topvalue}
          onChange={(e)=>{}}
        >
          {
              ["Scheme1","Scheme2","Scheme3","Scheme4"].map((value)=>(topvalue === value)?<MenuItem selected={true} value={value}>{value}</MenuItem>:<MenuItem value={value}>{value}</MenuItem>)
          }
        </Select>)
    }
    const columns = [
      { name: 'House Number', header: 'House Number', minWidth: 200, defaultFlex: 2, editor: edit},
      { name: 'Location and Landmark', header: 'Location and Landmark', minWidth: 200, defaultFlex: 2, editable:false},
      { name: 'House Head', header: 'House Head', minWidth: 200, defaultFlex: 2, editable:false},
      { name: 'Phone Number', header: 'Phone Number', minWidth: 200, defaultFlex: 2, editable:false },
      { name: 'Family Details', header: 'Family Details', minWidth: 200, defaultFlex: 2, editable:false },
      { name: 'Scheme Availed', header: 'Scheme Availed', minWidth: 200, defaultFlex: 2, editor: DropDown },
      { name: 'Eligble but Schemes not Availed', header: 'Eligble but Schemes not Availed', minWidth: 200, defaultFlex: 2 },
      { name: 'Volunteer Feedback', header: 'Volunteer Feedback', minWidth: 200, defaultFlex: 2 },
      { name: 'Locality Issues', header: 'Locality Issues', minWidth: 200, defaultFlex: 2 },
      { name: 'issue mentioned date', header: 'issue mentioned date', minWidth: 200, defaultFlex: 2 },
      { name: 'what actually happend', header: 'what actually happend', minWidth: 200, defaultFlex: 2 },
      { name: 'Case Study', header: 'Case Study', minWidth: 200, defaultFlex: 2 },
      { name: 'before and after photos', header: 'before and after photos', minWidth: 200, defaultFlex: 2 },
  
    ];
  
    const gridStyle = { minHeight: "60vh" };
  
    const emptySource = [];
    const dataSource = [
      {
        "id":1,
        "House Number":"97-45-44",
        "Location and Landmark":"Some Location",
        "House Head":" Name ",
        "Phone Number":" 9985544555",
        "Family Details":"",
        "Scheme Availed":"Dynamic Drop Down",
        "Eligble but Schemes not Availed":"",
        "Volunteer Feedback":"Editable Filed ",
        "House Hold Feedback":"",
        "Locality Issues":"Issue1",
        "issue mentioned date":"",
        "Issue resolved date":"",
        "what actually happend":"",
        "Case Study":"",
        "before and after photos":""
      }
    ];
    const onEditComplete = useCallback(() => {
      alert("Editing forbiden");
    })
    return(
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="District">District</InputLabel>
        <Select
          labelId="District"
          id="District"
          value={Dist}
          onChange={(e)=>{SetDist(e.target.value);SetConstituencies("");SetWard("");SetName("")}}
        >
          {
              data.District.keys.map((value)=><MenuItem value={value}>{value}</MenuItem>)
          }
        </Select>
        </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="constituencies">constituencies</InputLabel>
            <Select
            labelId="constituencies"
            id="constituencies"
            value={Constituencies}
            onChange={(e)=>{SetConstituencies(e.target.value);SetWard("");SetName("")}}
            >
            {
                Dist!==""&&Dist!==null ?data.District.next[Dist].constituencies.keys.map((value)=><MenuItem value={value}>{value}</MenuItem>):<div></div>
            }
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="Wards">Wards</InputLabel>
            <Select
            labelId="Wards"
            id="Wards"
            value={Ward}
            onChange={(e)=>{SetWard(e.target.value);SetName("")}}
            >
            {
                (Dist!==""&&Dist!==null) && (Constituencies!==""&&Constituencies!==null) ?data.District.next[Dist].constituencies.next[Constituencies].keys.map((value)=><MenuItem value={value}>{value}</MenuItem>):<div></div>
            }
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
        <InputLabel id="Name">Name</InputLabel>
        <Select
          labelId="Name"
          id="Name"
          value={Name}
          onChange={(e)=>{SetName(e.target.value)}}
        >
          {
              (Dist!==""&&Dist!==null) && (Constituencies!==""&&Constituencies!==null) && (Ward!==""&&Ward!==null)?data.District.next[Dist].constituencies.next[Constituencies].next[Ward].keys.map((value)=><MenuItem value={value.Name}>{value.Name}</MenuItem>):<div></div>
          }
        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        {(Dist!==""&&Dist!==null) && (Constituencies!==""&&Constituencies!==null) && (Ward!==""&&Ward!==null) && (Name!==""&&Name!==null)?
        <TextField
                                editable={false}
                                label="MobileNo"
                                value={data.District.next[Dist].constituencies.next[Constituencies].next[Ward].keys.filter((value)=>{if(value.Name === Name)return true})[0].MobileNo}
                                />:
                                <div></div>
        }
          </FormControl>
            <br/>
            <br/>
            {
              (Dist === "Nandyala" && Constituencies === "Const1" && Ward === "Ward1" && Name === "Chinna Swamy") ? <ReactDataGrid
              onEditComplete={onEditComplete}
              editable={true}
              theme={"blue-light"}
              idProperty="id"
              style={gridStyle}
              columns={columns}
              pagination
              dataSource={dataSource}
              defaultLimit={10}
            /> :
            <ReactDataGrid
              onEditComplete={onEditComplete}
              editable={true}
              theme={"blue-light"}
              idProperty="id"
              style={gridStyle}
              columns={columns}
              pagination
              dataSource={emptySource}
              defaultLimit={10}
            />
            }
        </div>
    )
}
export default SubAdmin;

//House Number	Location and Landmark	House Head	Phone Number	Family Details	Scheme Availed	Eligble but Schemes not Availed	Volunteer Feedback	House Hold Feedback	Locality Issues	issue mentioned date	Issue resolved date 	what actually happend	Case Study	before and after photos
