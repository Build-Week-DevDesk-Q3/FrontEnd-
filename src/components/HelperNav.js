import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HelperNavWrapper = styled.div`
  border-right: 1px solid #e5e5e5;
  background: #fff;
  width: 255px;
  height: 100%;
  transition: transform 0.5s linear;
`;

const HelperStyledLink = styled(Link)`
  display: flex;
  color: #e6a522;
  text-decoration: none;
  margin: 10px 0;
  &:hover {
    color: #000036;
    text-decoration: none;
  }
`;

const HelperNav = () => {
  const [showNav, toggleShowNav] = useState(true);
  return (
    <HelperNavWrapper>
      <div className="profile navSection">
        <div className="profile-pic">
          <i className="material-icons">account_box</i>
        </div>
        <div className="arrowToggle">
          <p>Hello: Helper Name!</p>
          <i className="material-icons" onClick={() => toggleShowNav(!showNav)}>
            arrow_drop_down
          </i>
        </div>
      </div>
      <div
        className={
          showNav
            ? "main-links isVisible navSection"
            : "main-links isHidden navSection"
        }
      >
        <div className="navWrapperDiv">
          <HelperStyledLink to="/dashboard">
            <i className="material-icons">dashboard</i>
            Dashboard
          </HelperStyledLink>
        </div>
        <div className="navWrapperDiv">
          <HelperStyledLink to="/help-student">
            <i className="material-icons">list_alt</i>
            Create Help Ticket
          </HelperStyledLink>
        </div>
        <div className="navWrapperDiv">
          <HelperStyledLink to="/open-tickets">
            <i className="material-icons">assignment</i>
            Open Tickets
          </HelperStyledLink>
        </div>
        <div className="navWrapperDiv">
          <HelperStyledLink to="/assigned-tickets">
            <i className="material-icons">assignment</i>
            Assigned Tickets
          </HelperStyledLink>
        </div>
      </div>
      <div className="account-HelperStyledLinks navSection">
        <div className="navWrapperDiv">
          <HelperStyledLink to="/logout-page">
            <i className="material-icons">settings_applications</i>
            Log Out
          </HelperStyledLink>
        </div>
        <div className="navWrapperDiv">
          <img
            style={{ margin: "0 2px" }}
            height="22px"
            width="22px"
            src={require(`../assets/lambda-logo.jpg`)}
          />
          <HelperStyledLink to="/student-account">
            Student Account
          </HelperStyledLink>
        </div>
      </div>
    </HelperNavWrapper>
  );
};

export default HelperNav;
