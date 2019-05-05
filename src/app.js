import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>This is from add expense component</div>;

const EditPage = () => <div>Edit Page</div>;

const HelpPage = () => <div>Help page</div>;

const ErrorPage = () => (
  <div>
    404- <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName="is-active" >Create</NavLink>
    <NavLink to='/edit' activeClassName="is-active" >Edit</NavLink>
    <NavLink to='/help' activeClassName="is-active" >Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="" component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
