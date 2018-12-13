import React from 'react';
import { connect } from 'react-redux';
import {deleteEmployee} from '../actions/employees';
import {Link} from 'react-router-dom';

const EmployeeListItem = ({dispatch, id, name, department, job_titles}) =>{
  return (
    <tr>
      <td>{id}</td>
      <td><Link to={`/employees/${id}`}>{name}</Link></td>
      <td>{job_titles}</td>
      <td>{department}</td>
      <td><button onClick={() => { dispatch(deleteEmployee(id)); }}>delete</button></td>
      <td><Link to={`/edit/${id}`}>Edit</Link></td>
    </tr>
  )
}

export default connect()(EmployeeListItem);
