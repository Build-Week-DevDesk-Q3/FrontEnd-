import React, { useState } from "react";
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

const MainWrapper = styled.div`
  color: #e6a522;
  font-family: Roboto;
  height: 100%;
`;

const App = () => {
  const [showNav, toggleShowNav] = useState(true);
  return (
    <MainWrapper>
      <HeaderComponent></HeaderComponent>
      <Navigation showNav={showNav} />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/help-student" component={HelpStudent} />
        <Route path="/open-tickets" component={OpenTickets} />
        <Route path="/assigned-tickets" component={AssignedTickets} />
        <Route path="/logout-page" component={LogoutPage} />
        <Route path="/student-account" component={StudentAccount} />
      </Switch>
      <button onClick={() => toggleShowNav(!showNav)}>test</button>
    </MainWrapper>
  );
};

export default App;
