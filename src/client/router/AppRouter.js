import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import UserDashboardPage from '../components/UserDashboardPage';
import AddUserPage from '../components/AddUserPage';
import EditUserPage from '../components/EditUserPage';
import NotFoundPage from '../components/NotFoundPage';
import EmployeeListPage from '../components/EmployeeListPage';
import SingleEmployeePage from '../components/SingleEmployeePage';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header history={history}/>
      <Switch>
        <Route path="/" component={EmployeeListPage} exact={true} />
        <Route path="/employees/:id" component={SingleEmployeePage} />
        <Route path="/create" component={AddUserPage} />
        <Route path="/edit/:id" component={EditUserPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
