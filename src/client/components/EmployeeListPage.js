import React from 'react';
import { connect } from 'react-redux';
import {Grid, Col, Row, Table} from 'react-bootstrap';
import {fetchEmployees} from '../actions/employees';
import EmployeePagination from './EmployeePagination';
import selectEmployees from '../selectors/employees';
import EmployeeTextFilter from './EmployeeListFilter';
import EmployeeListHeader from './EmployeeListHeader';
import {Link} from 'react-router-dom';

class EmployeeListPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePage: 1,
      activeRow: 0
    }
    this.rowRefs = [];    
  }
  componentDidMount(){
    if(this.props.location.search === ""){
      this.props.dispatch(
        fetchEmployees()
      ).then(()=>{
        this.rowRefs[0] && this.rowRefs[0].focus();
      })
    }else{
      // Back from SimpleEmployee page
      // URL: http://localhost:3000/?page=10
      const values = this.props.location.search.split('=');
      let page = values[1];
      let activeRow = this.props.location.state.activeRow;
      this.handlePageChange(page, activeRow);
    }    
  }

  // Click on the pagination
  handlePageChange = (pageNumber, activeRow=0) => {
    this.props.dispatch(
      fetchEmployees(pageNumber)
    ).then(()=>{
      this.rowRefs[activeRow] && this.rowRefs[activeRow].focus(); //Focus first row.
      this.setState({
        activePage: pageNumber,
        activeRow: activeRow
      });
    })
  }

  changeActiveRow = (rowIndex) =>{
    if (this.rowRefs[rowIndex]){
      this.rowRefs[rowIndex].focus();
      this.setState({
        activeRow: rowIndex
      }) 
    }  
  }
   // Enter Keyboard 
   handleKeyDown = (e, employeeId) =>{
    let code = e.keyCode;
    let tabIndex = e.target.tabIndex;
    let maxLen = this.props.employees.length; //100

    if (code === 13) { //Enter key
      this.props.history.push(`/employees/${employeeId}`);
    }
    if(code === 38){ //Up arrow key
      if(tabIndex === 0) return; // The table row is reached to the first row!!
      let prevIndex = parseInt(tabIndex)-1;
      this.changeActiveRow(prevIndex);
    }
    if(code === 40){ //Down arrow key
      if(tabIndex > maxLen) return; // The table row is reached to the last row!!
      let nextIndex = parseInt(tabIndex)+1;
      this.changeActiveRow(nextIndex);      
    }    
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
                <tbody>
                {
                  this.props.employees.map((employee, index)=>
                    <tr
                      key={employee.id}
                      tabIndex={index}
                      onClick={() => this.changeActiveRow(index) }
                      ref={ref=>this.rowRefs[index] = ref}
                      onKeyDown={(e) => this.handleKeyDown(e, employee.id)}
                      >     
                      <td>{employee.id}</td>
                      <td><Link to={`/employees/${employee.id}`}>{employee.name}</Link></td>
                      <td>{employee.job_titles}</td>
                      <td>{employee.department}</td>
                      <td><Link to={`/edit/${employee.id}`}>Edit</Link></td>
                    </tr>
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
