import React from 'react';
import { connect } from 'react-redux';
import {sortByName, sortByTitle} from '../actions/filters';
import {Grid, Col, Row, Table} from 'react-bootstrap';
import {fetchEmployees} from '../actions/employees';
import EmployeeListItem from './EmployeeListItem';
import EmployeePagination from './EmployeePagination';
import selectEmployees from '../selectors/employees';
import 'font-awesome/css/font-awesome.min.css';
import EmployeeTextFilter from './EmployeeListFilter';

class EmployeeListPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePage: 1,
      sortTypeForName: false, //false=acending order, true=decending order
      sortTypeForTitle: false      
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
  sortByName = () =>{
    let sortType = !this.state.sortTypeForName;
    this.props.dispatch(sortByName(sortType));
    this.setState({
      sortTypeForName: sortType
    });
  }
  sortByTitle = () =>{
    let sortType = !this.state.sortTypeForTitle;
    this.props.dispatch(sortByTitle(sortType));
    this.setState({
      sortTypeForTitle: sortType
    });
  }     

  render() {
    if (this.props.error) return <p>ERROR!!!</p>;
    if (this.props.employees) 
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <EmployeeTextFilter />
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
                    <span onClick={this.sortByName} className="sortIcon"><i className="fa fa-sort"></i></span>
                  </th>
                  <th>
                    Job Title
                    <span onClick={this.sortByTitle} className="sortIcon"><i className="fa fa-sort"></i></span>
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
            </Col>
          </Row>
        </Grid>
      ) 
  }  
};

const mapStateToProps = (state) => {
  return {
    //employees: state.employees.employees,
    employees: selectEmployees(state.employees.employees, state.filters),
    error: state.employees.error
  };
};
export default connect(mapStateToProps)(EmployeeListPage);



