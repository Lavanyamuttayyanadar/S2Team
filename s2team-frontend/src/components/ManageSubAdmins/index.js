import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import Button from '@material-ui/core/Button';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const columns = [
  { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
  { name: 'password', header: 'password', maxWidth: 1000, defaultFlex: 1 },
];

const gridStyle = { minHeight: "50vh" };
const dataSource = [
  { id: 1, name: 'User1', password: "*********" },
  { id: 2, name: 'User2', password: "*********" },
  { id: 3, name: 'User3', password: "*********" },
];

let ManageSubAdmins = () => {
  

  const[visible,setVisible]=useState('Hide');
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [add, setAdd] = React.useState(false);

  const openEditDialog = () => {
    
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };
  const adminClose = () => {
    setAdd(false);
  };
  const openAddDialog = () => {
    setAdd(true);
  };
  function Delete(){
    alert('deleting '+selected);

  }
 
  
  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
    setVisible('');
    
dataSource.map((obj)=>{if(obj.id==selected);})
  }, [])
 
  return(
    <div>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        enableSelection={true}
        onSelectionChange={onSelectionChange}
      />
  <center>
    <br/>
        <Button onClick={openAddDialog} className="controls" variant="contained" color="primary" type="submit">
        Add SubAdmin</Button> &nbsp;
        <span className={visible}>
         <Button onClick={openEditDialog} className="controls" variant="contained" color="primary">Edit</Button>&nbsp; 
         <Button onClick={Delete} className="controls" variant="contained" color="primary" type="submit">Delete</Button>
        </span>
        
      </center>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true}>
        <DialogTitle id="form-dialog-title"><center>Edit Form</center></DialogTitle>
        <div className="container">
          <TextField required className="textbox" id="outlined-search" label="Username" autoComplete="Username" variant="outlined" /><br/><br/>
          <TextField required className="textbox" id="outlined-search" label="Password" type="password" variant="outlined" /><br/><br/>
          <TextField required className="textbox" id="outlined-search" label="Confirm Password" type="password" variant="outlined" /><br/><br/>
        </div>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={add} onClose={adminClose} aria-labelledby="form-dialog-title" fullWidth={true}>
        <DialogTitle id="form-dialog-title"><center>Add subadmin Form</center></DialogTitle>
        <div className="container">
          <TextField required className="textbox" id="outlined-search" label="Username" autoComplete="Username" variant="outlined" /><br/><br/>
          <TextField required className="textbox" id="outlined-search" label="Password" type="password" variant="outlined" /><br/><br/>
          <TextField required className="textbox" id="outlined-search" label="Confirm Password" type="password" variant="outlined" /><br/><br/>
        </div>
        <DialogActions>
          <Button onClick={adminClose} color="primary">
            Add
          </Button>
          <Button onClick={adminClose} color="primary">
            cancel
          </Button>
        </DialogActions>
      </Dialog>

   </div>
  );
}

export default ManageSubAdmins;