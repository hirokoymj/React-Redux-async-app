import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteEmployee } from '../actions/employees';
import {Button, Modal} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

class SingleEmployeeDelete extends Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }
  handleClose = ()=>{
    this.setState({ show: false });
  }

  handleShow = ()=>{
    this.setState({ show: true });
  }  
  render(){
    return(
      <div>
        <Button 
          bsStyle="danger"
          className="pull-right" 
          onClick={this.handleShow}>
          <i className="fa fa-trash-o hidden-sm hidden-md hidden-lg"></i> <span className="hidden-xs">Delete</span>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <h4 className="modalTitle">Delete</h4>
            <p className="centered">Are you sure you want to delete the data?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{
              this.props.dispatch(deleteEmployee(this.props.eid)); 
              this.handleClose();
              //this.props.history.push('/');
            }}>Delete</Button>
            <Button onClick={this.handleClose}>Cancel</Button>          
          </Modal.Footer>
        </Modal>  
      </div>
    )
  }
}
export default connect()(SingleEmployeeDelete);
