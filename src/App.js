import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderBar";
import {
  Navigation,
  Dashboard,
  HelpStudent,
  OpenTickets,
  AssignedTickets,
  LogoutPage,
  StudentAccount
  // HelperHeaderComponent,
  // HelperNav
} from "./components";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  font-family: Roboto;
  height: 100%;
`;

const App = () => {
  return (
    <MainWrapper>
      <HeaderComponent />
      <Navigation />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/help-student" component={HelpStudent} />
        <Route path="/open-tickets" component={OpenTickets} />
        <Route path="/assigned-tickets" component={AssignedTickets} />
        <Route path="/logout-page" component={LogoutPage} />
        <Route path="/student-account" component={StudentAccount} />
      </Switch>
    </MainWrapper>
  );
};

export default App;
