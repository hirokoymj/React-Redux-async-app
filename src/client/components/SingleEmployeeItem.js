import React from 'react';
import {Table} from 'react-bootstrap';
import numeral from 'numeral';

const SingleEmployeeItem = (props) =>{
  const {id, name, department, job_titles, employee_annual_salary} = props.employee;
  return (
    <Table className="employeeDetailTbl">
      <tbody>
      <tr>
        <td className="item">ID</td>
        <td>{id}</td>
      </tr>
      <tr>
        <td className="item">name</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td className="item">Department</td>
        <td>{department}</td>
      </tr>
      <tr>
        <td className="item">Job Title</td>
        <td>{job_titles}</td>
      </tr>
      <tr>
        <td className="item">Salary</td>
        <td>{numeral(employee_annual_salary).format('$0,0.00')}</td>
      </tr>                
      </tbody>
  </Table>    
  )
}

export default SingleEmployeeItem;
