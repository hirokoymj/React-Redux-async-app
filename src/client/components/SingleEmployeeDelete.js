import React from 'react';
import { connect } from 'react-redux';
import { deleteEmployee } from '../actions/employees';
import {Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const SingleEmployeeDelete = (props) => {
    return(
      <Button 
        bsStyle="danger"
        className="pull-right" 
        onClick={()=>{ 
          props.dispatch(deleteEmployee(props.eid)); 
          props.history.push('/');
        }}>
        <i className="fa fa-trash-o hidden-sm hidden-md hidden-lg"></i> <span className="hidden-xs">Delete</span>
      </Button>
    )
}
export default connect()(SingleEmployeeDelete);
