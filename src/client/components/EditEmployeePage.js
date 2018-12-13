import React from 'react';
import { connect } from 'react-redux';
//import { editUser } from '../actions/users'; // action generator
import {editEmployee} from '../actions/employees';
import EmployeeForm from './EmployeeForm';
import {Grid, Row, Col} from 'react-bootstrap';

const EditEmployeePage = (props) => {
  console.log("EditUserPage", props.match.params.id);
  console.log("EditUserPage", props.employee);

  return (
    <Grid>
      <Row>
        <Col xs={12} sm={10}>
          <h1>Edit User Page</h1>
          <EmployeeForm 
            employee={props.employee}
            onSubmit={(formData) => {
              props.dispatch(editEmployee(props.match.params.id, formData));
              props.history.push('/');
            }}
          />      
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
