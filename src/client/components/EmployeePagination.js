import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTotalDocCount } from '../actions/pagination';
import { resetFilters} from '../actions/filters';
import Pagination from "react-js-pagination";

class EmployeePagination extends Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getTotalDocCount());
  }

  componentDidUpdate(prevProps){
    if(prevProps.activePage !== this.props.activePage){
      console.log('changed active page!!');
      this.props.dispatch(resetFilters());
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
    employeesCount: state.employees.employees.length,
  };
};
export default connect(mapStateToProps)(EmployeePagination);


