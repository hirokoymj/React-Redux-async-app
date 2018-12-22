import React from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions/employees';
import EmployeeForm from './EmployeeForm';
import {Grid, Row, Col} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployeePage = (props) => (
    <Grid>
      <Row>
        <Col xs={12} sm={8} md={6} className="add-employee-container">
          <h1>Create a new employee</h1>
          <EmployeeForm 
            onSubmit={(employee) => {
            props.dispatch( createEmployee(employee) )
              .then(()=>{
                toast.success("Saved!");
              })
            ;
          }}/>
          <ToastContainer hideProgressBar />      
        </Col>
      </Row>    
    </Grid>
);
export default connect()(AddEmployeePage);
