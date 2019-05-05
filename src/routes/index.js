import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from '../components/Header';
import EditPage from "../components/Edit";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import AddExpensePage from "../components/AddExpense";
import HelpPage from "../components/Help";
import ErrorPage from "../components/Error";

const AppRouter = () => (
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

export default AppRouter;
