import React from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions/employees';
import EmployeeForm from './EmployeeForm';
import {Grid, Row, Col} from 'react-bootstrap';

const AddEmployeePage = (props) => (
    <Grid>
      <Row>
        <Col xs={12} sm={8} md={6} className="add-employee-container">
          <h1>Create a new employee</h1>
          <EmployeeForm 
            onSubmit={(employee) => {
            props.dispatch(createEmployee(employee));
          }}/>      
        </Col>
      </Row>    
    </Grid>
);
export default connect()(AddEmployeePage);
