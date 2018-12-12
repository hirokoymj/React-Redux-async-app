import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeUser} from '../actions/users';
import {Link} from 'react-router-dom';

const UserListItem = ({dispatch, id, firstname, lastname, email}) =>{
  return (
    <tr key={firstname}>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td><Link to={`/edit/${id}`}>Edit</Link></td>
      <td><button onClick={() =>{dispatch(removeUser({id}))}}>delete</button></td>
    </tr>
  )
}
//export default UserListItem;
export default connect()(UserListItem);

