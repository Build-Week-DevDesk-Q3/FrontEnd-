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
} from "./components";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const NavText = styled.div`
  color: #e6a522;
`;

const App = () => {
  return (
    <NavText>
      <HeaderComponent></HeaderComponent>
      <div>
        <Navigation />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/help-student" component={HelpStudent} />
          <Route path="/open-tickets" component={OpenTickets} />
          <Route path="/assigned-tickets" component={AssignedTickets} />
          <Route path="/logout-page" component={LogoutPage} />
          <Route path="/student-account" component={StudentAccount} />
        </Switch>
      </div>
    </NavText>
  );
};

export default App;
