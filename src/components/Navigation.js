import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  color: #e6a522;
  border-right: 1px solid #e5e5e5;
  background: #fff;
  width: 255px;
  height: 100%;
  transition: transform 0.5s linear;
`;

const Navigation = props => {
  return (
    <NavWrapper className={props.showNav ? "isVisible" : "isHidden"}>
      <div className="profile">
        <i className="material-icons">account_box</i>
        <p>Hello: Helper Name!</p>
        <i className="material-icons">arrow_drop_down</i>
      </div>
      <div className="main-links">
        <div>
          <Link to="/dashboard">
            <i className="material-icons">dashboard</i>Dashboard
          </Link>
        </div>
        <div>
          <Link to="/help-student">
            <i className="material-icons">list_alt</i>Create Help Ticket
          </Link>
        </div>
        <div>
          <Link to="/open-tickets">
            <i className="material-icons">assignment</i>Open Tickets
          </Link>
        </div>
        <div>
          <Link to="/assigned-tickets">
            <i className="material-icons">assignment</i>Assigned Tickets
          </Link>
        </div>
      </div>
      <div className="account-links">
        <div>
          <Link to="/logout-page">
            <i className="material-icons">settings_applications</i>Log Out
          </Link>
        </div>
        <div>
          <Link to="/student-account">Student Account</Link>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navigation;
