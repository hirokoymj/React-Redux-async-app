import React from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import SingleEmployeeItem from './SingleEmployeeItem';
 
class SingleEmployeePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      eid: this.props.match.params.id
    }
  }

  getNextId = () =>{
    this.setState((prevState)=>({
      eid: parseInt(prevState.eid)+1
    }));
    this.props.history.push(`/employees/${this.state.eid}`);
  }
  getPrevId = () =>{
    this.setState((prevState)=>({
      eid: parseInt(prevState.eid)-1 === 0 ? 1 : parseInt(prevState.eid)-1
    }));
    this.props.history.push(`/employees/${this.state.eid}`);
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={10}>
            <h1>Employee Detail Page</h1>
            <button onClick={this.getPrevId}>Previous</button>
            <button onClick={this.getNextId}>Next</button>
            <SingleEmployeeItem employee={this.props.employee} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    employee: state.employees.employees.find((employee) => employee.id === parseInt(props.match.params.id)),
  };
};
export default connect(mapStateToProps)(SingleEmployeePage);
