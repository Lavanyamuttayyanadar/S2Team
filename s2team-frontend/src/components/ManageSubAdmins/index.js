import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import Button from '@material-ui/core/Button';

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

let ManageSubAdmins = () => (
  <div>
    <ReactDataGrid
      idProperty="id"
      columns={columns}
      dataSource={dataSource}
      style={gridStyle}
    />
    <center><br/><Button variant="contained" color="primary" type="submit">Add SubAdmin</Button><br/></center>
  </div>
);

export default ManageSubAdmins;