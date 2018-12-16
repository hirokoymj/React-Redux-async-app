import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class EmployeeListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeRow: 0
    }
  }
 
  changeActiveRow = (rowIndex) =>{
    if (this.props.rowRefs[rowIndex]){
      this.props.rowRefs[rowIndex].focus();
      this.setState({
        activeRow: rowIndex
      }) 
    }  
  }

  // Enter Keyboard 
  handleKeyDown = (e, employeeId) =>{
    let code = e.keyCode;
    let tabIndex = e.target.tabIndex;
    let maxLen = this.props.employeesCount; //100

    if (code === 13) { //Enter key
      this.props.history.push(`/employees/${employeeId}`);
    }
    if(code === 38){ //Up arrow key
      if(tabIndex === 0) return; // The table row is reached to the first row!!
      let prevIndex = parseInt(tabIndex)-1;
      this.changeActiveRow(prevIndex);
    }
    if(code === 40){ //Down arrow key
      if(tabIndex > maxLen) return; // The table row is reached to the last row!!
      let nextIndex = parseInt(tabIndex)+1;
      this.changeActiveRow(nextIndex);      
    }    
  }

  render(){
    const {id, name, department, job_titles} = this.props.employee;
    return (
        <tr
          tabIndex={this.props.index}
          ref={ref=>this.props.rowRefs[this.props.index] = ref}
          onClick={() => this.changeActiveRow(this.props.index) }
          onKeyDown={(e) => this.handleKeyDown(e, id)}
          >     
          <td className="text-centered">{id}</td>
          <td><Link to={`/employees/${id}`}>{name}</Link></td>
          <td>{job_titles}</td>
          <td>{department}</td>
          <td className="text-centered"><Link to={`/edit/${id}`}>Edit</Link></td>
        </tr>
    )
  }
}
