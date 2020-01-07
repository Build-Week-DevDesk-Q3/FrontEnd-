import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  border-right: 1px solid #e5e5e5;
  background: #fff;
  width: 255px;
  height: 100%;
  transition: transform 0.5s linear;
`;

const StyledLink = styled(Link)`
  color: #000036;
  text-decoration: none;
  &:hover 
    color: orange;
`;

const Navigation = props => {
  return (
    <NavWrapper className={props.showNav ? "isVisible" : "isHidden"}>
      <div className="profile">
        <div className="profile-pic">
          <i className="material-icons">account_box</i>
        </div>
        <p>Hello: Helper Name!</p>
        <i className="material-icons">arrow_drop_down</i>
      </div>
      <div className="main-links">
        <div>
          <StyledLink to="/dashboard">
            <i className="material-icons">dashboard</i>Dashboard
          </StyledLink>
        </div>
        <div>
          <StyledLink to="/help-student">
            <i className="material-icons">list_alt</i>Create Help Ticket
          </StyledLink>
        </div>
        <div>
          <StyledLink to="/open-tickets">
            <i className="material-icons">assignment</i>Open Tickets
          </StyledLink>
        </div>
        <div>
          <StyledLink to="/assigned-tickets">
            <i className="material-icons">assignment</i>Assigned Tickets
          </StyledLink>
        </div>
      </div>
      <div className="account-StyledLinks">
        <div>
          <StyledLink to="/logout-page">
            <i className="material-icons">settings_applications</i>Log Out
          </StyledLink>
        </div>
        <div>
          {/* <img src={require(`./assets/lambda-logo.jpg`)} /> */}
          <StyledLink to="/student-account">Student Account</StyledLink>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navigation;
