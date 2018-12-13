import React from 'react';
import { connect } from 'react-redux';
import {Grid, Col, Row, Table} from 'react-bootstrap';
import {fetchEmployees} from '../actions/employees';
import EmployeeListItem from './EmployeeListItem';
import EmployeePagination from './EmployeePagination';
import selectEmployees from '../selectors/employees';
import EmployeeTextFilter from './EmployeeListFilter';
import EmployeeListHeader from './EmployeeListHeader';

class EmployeeListPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePage: 1,
    }    
  }
  componentDidMount(){
    this.props.dispatch(fetchEmployees());
  }
  // Click on the pagination
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
        <Grid>
          <Row>
            <Col xs={12}>
              <EmployeeTextFilter />
              <EmployeePagination 
                activePage={this.state.activePage}
                handlePageChange={this.handlePageChange}
              />
              <Table bordered className="employeeListTbl">
                <EmployeeListHeader />
                {
                  this.props.employees.map(employee=>
                    <EmployeeListItem key={employee.id} {...employee} />
                  )
                }
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
