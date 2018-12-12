import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTotalDocCount } from '../actions/pagination';
import Pagination from "react-js-pagination";
//import {Alert} from 'react-bootstrap';

class EmployeePagination extends Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getTotalDocCount());
  }

  componentDidUpdate(prevProps){
    if(prevProps.employees.length !== this.props.employees.length){
      console.log('changed employee list!!');
      this.props.dispatch(getTotalDocCount());
    }
  }

  render() {
     return (
        <div className="text-center">
          <Pagination
            activePage={this.props.activePage}
            itemsCountPerPage={100}
            totalItemsCount={this.props.pagination.totalCount}
            pageRangeDisplayed={10}
            onChange={this.props.handlePageChange} 
            /> 
        </div>
      )      
  }//end of render()
}

const mapStateToProps = (state) => {
  return {
    pagination: state.pagination,
    error: state.pagination.error,
    employees: state.employees.employees,
  };
};
export default connect(mapStateToProps)(EmployeePagination);


