import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import cx from 'classnames';

const Header = (props) => {
  //console.log(props.history);
  return(
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React Redux Demo</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/" className={cx({'active': props.history.location.pathname === '/'})}>
            Employee List
          </NavItem>
          <NavItem eventKey={2} href="/create" className={cx({'active': props.history.location.pathname === '/create'})}>
            Create
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;