import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchDepartments} from '../actions/departments';
import {fetchJobTitles} from '../actions/jobTitles';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import Selectbox from './Selectbox';
import InputText from './InputText';

class UserForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: this.props.employee ? this.props.employee.name.split(',')[0] : '',
      lastName: this.props.employee ? this.props.employee.name.split(',')[1] : '',
      department: this.props.employee ? this.props.employee.department : '',
      employee_annual_salary: this.props.employee ? this.props.employee.employee_annual_salary : 0,
      job_titles: this.props.employee ? this.props.employee.job_titles : '',
//      titleOptions: [], //dropdown elements
//      departmentOptions: [], //dropdown elements
      firstNameErr: null,
      lastNameErr: null,
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchDepartments());
    this.props.dispatch(fetchJobTitles());
  }
  
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    const formData = {
      "name": `${this.state.firstName}, ${this.state.lastName}`,
      "department": this.state.department,
      "employee_annual_salary": parseInt(this.state.employee_annual_salary),
      "job_titles": this.state.job_titles
    }
    console.log(formData);
    this.props.onSubmit(formData);
  }
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <InputText name="firstName" type="text" formLabel="First Name" validationState={this.state.firstNameErr} value={this.state.firstName} onChange={this.handleChange} inputRef={el => this.firstNameElement = el} />
          <InputText name="lastName" type="text" formLabel="Last Name" validationState={this.state.lastNameErr} value={this.state.lastName} onChange={this.handleChange} />
          <Selectbox name="department" options={this.props.departments} formLabel="Department" value={this.state.department} onChange={this.handleChange}/>    
          <Selectbox name="job_titles" options={this.props.titles} formLabel="Job Titles" value={this.state.job_titles} onChange={this.handleChange}/> 
          <InputText name="employee_annual_salary" type="number" formLabel="Salary" value={this.state.employee_annual_salary} onChange={this.handleChange} />
          <Button type="submit" type="submit" className="btn btn-success createBtn">Create</Button>
        </form>      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    departments: state.departments.departments,
    departmentsError: state.departments.error,
    titles: state.titles.titles,
    titlesError: state.titles.error
  };
};
export default connect(mapStateToProps)(UserForm);


