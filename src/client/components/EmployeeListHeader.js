import React from 'react';
import { connect } from 'react-redux';
import {sortByName, sortByTitle} from '../actions/filters';
import 'font-awesome/css/font-awesome.min.css';

class EmployeeListHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sortTypeForName: false, //false=acending order, true=decending order
      sortTypeForTitle: false      
    }    
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
  render(){
    return(
      <thead>
        <tr>
          <th className="item-id">
            ID
          </th>
          <th>
            Name
            <span onClick={this.sortByName} className="sortIcon"><i className="fa fa-sort"></i></span>
            </th>
          <th>
            Job Title
            <span onClick={this.sortByTitle} className="sortIcon"><i className="fa fa-sort"></i></span>
          </th>
          <th>
            Department
          </th>
          <th className="item-edit">
            EDIT
          </th>
        </tr>
      </thead>
    )
  }
}
export default connect()(EmployeeListHeader);