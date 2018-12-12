import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseItem = ({dispatch, id, amount, createAt, description, note}) =>{
  return (
    <div>
      <span>{description}</span>
      <span>{amount}</span>
      <span><button onClick={() => { dispatch(removeExpense({ id })); }}>Remove</button></span>
    </div>
  )
}

//export default ExpenseItem;
// Connected component
export default connect()(ExpenseItem);