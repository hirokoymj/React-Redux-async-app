import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const SingleEmployeeController = (props) =>(
  <div>
    <Button className="next-prev-btn" onClick={props.getPrevEmployee}>
      <i className="fa fa-angle-left hidden-sm hidden-md hidden-lg"></i>
      <span className="hidden-xs">Previous</span>
    </Button>
    <Button className="next-prev-btn" onClick={props.getNextEmployee}>
      <span className="hidden-xs">Next</span>
      <i className="fa fa-angle-right hidden-sm hidden-md hidden-lg"></i>
    </Button>
  </div>
);
export default SingleEmployeeController;
