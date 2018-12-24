import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import {FormGroup, FormControl} from 'react-bootstrap';

class EmployeeListFilter extends React.Component{
  onTextChange = (e) => {
    console.log(e.target.value);
    this.props.dispatch(setTextFilter(e.target.value));
  };

  render() {
    return (
      <FormGroup>
        <FormControl
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          placeholder="Search department..."
          />      
      </FormGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
  
});
export default connect(mapStateToProps)(EmployeeListFilter);

