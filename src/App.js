import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderBar";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";
import {
  Navigation,
  Dashboard,
  HelpStudent,
  AssignedTickets,
  LogoutPage,
  StudentAccount
} from "./components";

const MainWrapper = styled.div`
  font-family: Roboto;
  height: 100%;
`;

const WorkSpace = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <MainWrapper>
      <HeaderComponent />
      <WorkSpace>
        <Navigation />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/help-student" component={HelpStudent} />
          <Route path="/open-tickets" component={SearchForm} />
          <Route path="/assigned-tickets" component={AssignedTickets} />
          <Route path="/logout-page" component={LogoutPage} />
          <Route path="/student-account" component={StudentAccount} />
        </Switch>
      </WorkSpace>
    </MainWrapper>
  );
};

export default App;
