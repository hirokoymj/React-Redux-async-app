import React from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions/employees'; // action generator
import UserForm from './UserForm';
import {Grid, Row, Col} from 'react-bootstrap';


const AddUserPage = (props) => (
  <Grid>
    <Row>
      <Col xs={12} sm={10}>
        <h1>Create a new user</h1>
        <UserForm 
          onSubmit={(employee) => {
          props.dispatch(createEmployee(employee));
          props.history.push('/');
        }}/>      
      </Col>
    </Row>
  </Grid>
);
// Connected component allows us to use props.dispatch()
export default connect()(AddUserPage);
