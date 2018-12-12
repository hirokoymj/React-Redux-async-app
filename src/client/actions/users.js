import uuid from 'uuid';

// ADD_User
export const addUser = (
  {
    firstname = '',
    lastname = '',
    email = ''
  } = {}
) => ({
  type: 'ADD_USER',
  user: {
    id: uuid(),
    firstname,
    lastname,
    email
  }
});

// REMOVE_User
export const removeUser = ({ id } = {}) => ({
  type: 'REMOVE_USER',
  id
});

// EDIT_User
export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
});
