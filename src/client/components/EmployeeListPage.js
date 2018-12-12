import React from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';
import {fetchEmployees} from '../actions/employees';
import EmployeeListItem from './EmployeeListItem';
import EmployeePagination from './EmployeePagination';
//import selectEmployees from '../selectors/employees';


class EmployeeListPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePage: 1
    }    
  }
  componentDidMount(){
    this.props.dispatch(fetchEmployees());
  }
  // Clicked on pagination
  handlePageChange = (pageNumber) => {
    this.props.dispatch(fetchEmployees(pageNumber));
    this.setState({
      activePage: pageNumber,
    });
  }  

  render() {
    if (this.props.error) return <p>ERROR!!!</p>;
    if (this.props.employees) 
      return (
        <div>
        <EmployeePagination 
        activePage={this.state.activePage}
        handlePageChange={this.handlePageChange}   
        />
          <Table bordered className="employeeListTbl">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>
                  Name
                </th>
                <th>
                  Job Title
                </th>
                <th>Department</th>
                <th>DELETE</th>
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.employees.map(employee=>
                <EmployeeListItem key={employee.id} {...employee} />
              )
            }
            </tbody>
          </Table>
        </div>
      ) 
  }  
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees.employees,
    //employees: selectEmployees(state.employees.employees, state.filters),
    error: state.employees.error
  };
};
export default connect(mapStateToProps)(EmployeeListPage);



