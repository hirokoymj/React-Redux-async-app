import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Alert, Button} from 'react-bootstrap';
import SingleEmployeeItem from './SingleEmployeeItem';
import { fetchAllEmployees } from '../actions/employees';
import 'font-awesome/css/font-awesome.min.css';
import SingleEmployeeDelete from './SingleEmployeeDelete';
import SingleEmployeeController from './SingleEmployeeController';

 
class SingleEmployeePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      eid: this.props.match.params.id
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchAllEmployees());
  }

  getNextEmployee = () =>{
    let nextId = parseInt(this.state.eid)+1;
    //console.log("nextId", nextId);
    this.setState({
      eid: nextId
    });
    this.props.history.push(`/employees/${nextId}`);
  }
  getPrevEmployee = () =>{
    let prevId = (parseInt(this.state.eid))-1;
    prevId = (prevId === 0) ? 1: prevId;
    console.log(prevId);

    this.setState({
      eid: prevId
    });
    this.props.history.push(`/employees/${prevId}`);
  }
  backToDashboardPage = (eid) =>{
    //const {pageNum, rowIndex} = this.calculatePageNumAndRowIndex(eid);
    const tableViewInfo = this.calculatePageAndRowIndex(eid);
    this.props.history.push('/', tableViewInfo);
  }  

  /**
   * Calculate a page number and a row index for a current employee and use the table view in in Employee List Page.
   * @param {number} - employeeId
   * @returns {object} - tableViewInfo
   * @description Culculate two values 1) page number, 2) active row index.
   */
  calculatePageAndRowIndex = (employeeId) =>{
    // Calculate active row index.
    let arrayIndex = this.props.employeesAll.map((obj) => obj.id).indexOf(parseInt(employeeId));
    //console.log('arrayIndex', arrayIndex);
    let rowIndex = 0;
    if(arrayIndex < 100){
      rowIndex = arrayIndex;
    }else{
      rowIndex = arrayIndex%100;
    }

    // Calculate page number.
    let pageNum = Math.floor(arrayIndex/100);
    pageNum = pageNum + 1;
    //console.log('pageNum', pageNum);
    const tableViewInfo = {
      activePage: pageNum,
      activeRowIndex: rowIndex
    }
    return tableViewInfo;
  }  

  render(){
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={10} md={8} className="centered-container">
            <h1>Employee Details</h1>
          </Col>
        </Row>  
        <Row>
          <Col xs={12} sm={10} md={8} className="centered-container">
            <Row>  
              <Col xs={4} sm={4}>
                <Button bsStyle="link" className="backtoDashboard" onClick={() => this.backToDashboardPage(this.state.eid)}><i className="fa fa-home"></i><span className="link-text hidden-xs">Go to dashboard</span></Button>
              </Col>        
              <Col xs={4} sm={4} className="centered">
                <SingleEmployeeController
                  getPrevEmployee={this.getPrevEmployee}
                  getNextEmployee={this.getNextEmployee}
                  />
              </Col>        
              <Col xs={4} sm={4}>
                <SingleEmployeeDelete eid={this.state.eid} history={this.props.history} />
              </Col>        
            </Row>          
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={10} md={8} className="centered-container">
          {
            (typeof this.props.foundEmployee === 'undefined') ? 
            (
              <Alert bsStyle="warning"><h4>There is no employee data. ID: {this.state.eid}</h4></Alert>
            ):(
              <SingleEmployeeItem employee={this.props.foundEmployee} />
            )
          }
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    foundEmployee: state.employees.employees.find((employee) => employee.id === parseInt(props.match.params.id)),
    employeesAll: state.employees.employeesAll
  };
};
export default connect(mapStateToProps)(SingleEmployeePage);



