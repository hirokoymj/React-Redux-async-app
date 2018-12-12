import React from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';
import UserListItem from './UserListItem';

const UserList = (props) => {
  return (
    <Table bordered>
      <tbody>
      {
        props.users.map(user =>
          <UserListItem key={user.id} {...user}/>
          )
      }
      </tbody>
    </Table>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(UserList);

