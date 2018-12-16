import React from 'react';
import { connect } from 'react-redux';
import {Grid, Col, Row, Table} from 'react-bootstrap';
import {fetchEmployees} from '../actions/employees';
import EmployeePagination from './EmployeePagination';
import selectEmployees from '../selectors/employees';
import EmployeeTextFilter from './EmployeeListFilter';
import EmployeeListHeader from './EmployeeListHeader';
import {Link} from 'react-router-dom';
import EmployeeListItem from './EmployeeListItem';

class EmployeeListPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePage: 1,
      rowRefs: []
    }
  }

  componentDidMount(){
    //console.log(this.props.location.state);
    if(typeof this.props.location.state === "undefined"){
      this.props.dispatch(
        fetchEmployees()
      ).then(()=>{
        this.state.rowRefs[0] && this.state.rowRefs[0].focus();
      })
    }else{
      // The page will back from SimpleEmployee page with tableView info.
      let activePage = this.props.location.state.activePage;
      let activeRow = this.props.location.state.activeRowIndex;
      this.handlePageChange(activePage, activeRow);
    }    
  }

  handlePageChange = (pageNumber=1, activeRow=0) => {
    this.props.dispatch(
      fetchEmployees(pageNumber)
    ).then(()=>{
      this.state.rowRefs[activeRow] && this.state.rowRefs[activeRow].focus();
      this.setState({
        activePage: pageNumber
      });
    })
  }  

  render() {
    if (this.props.error) return <p>ERROR!!!</p>;
    if (this.props.employees) 
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Employee Dashboard</h1>
              <EmployeeTextFilter />
              <EmployeePagination 
                activePage={this.state.activePage}
                handlePageChange={this.handlePageChange} />
              <Table bordered responsive className="employeeListTbl">
                <EmployeeListHeader />
                <tbody>
                {
                  this.props.employees.map((employee, index)=>
                    <EmployeeListItem 
                      key={employee.id} 
                      employee={employee} 
                      index={index} 
                      rowRefs={this.state.rowRefs}
                      history={this.props.history}
                      employeesCount={this.props.employees.length} />
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
    error: state.employees.error,
    activeEmployeeRow: state.employees.activeEmployeeRow
  };
};
export default connect(mapStateToProps)(EmployeeListPage);
