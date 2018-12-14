import React from 'react';
import { connect } from 'react-redux';
import {deleteEmployee} from '../actions/employees';
import {Link} from 'react-router-dom';

export default class EmployeeListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeRow: 0
    }
    this.rowRefs = [];
  }

  changeActiveRow = (rowIndex) =>{
    if (this.rowRefs[rowIndex]){
      // Highlighted row
      this.rowRefs[rowIndex].focus();
      // Set active row
      this.setState({
        activeRow: rowIndex
      }) 
    }  
  }
  // Enter Keyboard 
  handleKeyDown = (e, employeeId) =>{
    let code = e.keyCode;
    if (code === 13) { //Enter key
      this.props.history.push(`/employees/${employeeId}`);
    }
  }  

  render(){
    const {id, name, department, job_titles} = this.props;
    return (
      <tbody>
        <tr
          tabIndex={this.props.index}
          onClick={() => this.changeActiveRow(this.props.index) }
          ref={ref=>this.rowRefs[this.props.index] = ref}
          onKeyDown={(e) => this.handleKeyDown(e, id)}
          >     
          <td>{id}</td>
          <td><Link to={`/employees/${id}`}>{name}</Link></td>
          <td>{job_titles}</td>
          <td>{department}</td>
          <td><Link to={`/edit/${id}`}>Edit</Link></td>
        </tr>
      </tbody>
    )
  }
}



