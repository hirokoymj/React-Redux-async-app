import React, {Component} from 'react';
import { connect } from 'react-redux';
import {editEmployee} from '../actions/employees';
import EmployeeForm from './EmployeeForm';
import {Grid, Row, Col} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEmployeePage = (props) =>{
    return(
      <Grid>
        <Row>
          <Col xs={12} sm={8} md={6} className="edit-employee-container">
            <h1>Edit Employee Page</h1>
            <EmployeeForm
              employee={props.employee}
              onSubmit={(formData)=>{
                props.dispatch(editEmployee(props.match.params.id, formData))
                  .then(()=>{
                    toast.success("Edit!");
                  })
              }}
            />
            <ToastContainer hideProgressBar />      
          </Col>
        </Row>
      </Grid>
    )
}

const mapStateToProps = (state, props) => {
  return {
    employee: state.employees.employees.find((employee) => employee.id === parseInt(props.match.params.id)),
  };
};
export default connect(mapStateToProps)(EditEmployeePage);




