import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Alert, Button, Panel, Pager} from 'react-bootstrap';
import SingleEmployeeItem from './SingleEmployeeItem';
import { deleteEmployee, fetchAllEmployees } from '../actions/employees';
 
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
    this.setState((prevState)=>({
      eid: parseInt(prevState.eid)+1
    }));
    this.props.history.push(`/employees/${this.state.eid}`);
  }
  getPrevEmployee = () =>{
    this.setState((prevState)=>({
      eid: parseInt(prevState.eid)-1 === 0 ? 1 : parseInt(prevState.eid)-1
    }));
    this.props.history.push(`/employees/${this.state.eid}`);
  }
  backToDashboardPage = (eid) =>{
    //const {pageNum, rowIndex} = this.calculatePageNumAndRowIndex(eid);
    const {currentEmployeePageNum, currentEmployeeRowIndex} = this.calculatePageAndRowIndex(eid);
    console.log(currentEmployeePageNum);
    console.log(currentEmployeeRowIndex);
    this.props.history.push(`/?page=${currentEmployeePageNum}`, {activeRow: currentEmployeeRowIndex});
  }  

  // Calculate page number and row index for current employee
  calculatePageAndRowIndex = (employeeId) =>{
    let arrayIndex = this.props.employeesAll.map((obj) => obj.id).indexOf(parseInt(employeeId));
    //console.log('arrayIndex', arrayIndex);
    let rowIndex = 0;
    if(arrayIndex < 100){
      rowIndex = arrayIndex;
    }else{
      rowIndex = arrayIndex%100;
    }
    //console.log('rowIndex', rowIndex);
    let pageNum = Math.floor(arrayIndex/100);
    pageNum = pageNum + 1;
    //console.log('pageNum', pageNum);
    const result = {
      currentEmployeePageNum: pageNum,
      currentEmployeeRowIndex: rowIndex
    }
    return result;
  }  

  render(){
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={10}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <span className="title">Employee Details</span>
                  <Button 
                    bsStyle="danger"
                    className="pull-right" 
                    onClick={()=>{ 
                      this.props.dispatch(deleteEmployee(this.state.eid)); 
                      this.props.history.push('/');
                    }}>
                    Delete
                  </Button>
                  <div className="clearfix"></div>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Pager>
                  <Pager.Item href="#" onClick={this.getPrevEmployee}>Previous</Pager.Item>
                  <Pager.Item href="#" onClick={this.getNextEmployee}>Next</Pager.Item>
                </Pager>
                <Button bsStyle="link" className="backToDashboardBtn" onClick={() => this.backToDashboardPage(this.state.eid)}>&larr; back to Dashboard</Button>
                {
                  (typeof this.props.foundEmployee === 'undefined') ? 
                  (
                    <Alert bsStyle="warning"><h4>There is no employee data. ID: {this.state.eid}</h4></Alert>
                  ):(
                    <SingleEmployeeItem employee={this.props.foundEmployee} />
                  )
                }
              </Panel.Body>
            </Panel> 
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

