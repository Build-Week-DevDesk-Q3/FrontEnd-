import React, { useState } from "react";
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
  display: flex;
  color: #000036;
  text-decoration: none;
  margin: 10px 0;
  &:hover {
    color: #e6a522;
    text-decoration: none;
  }
`;

const Navigation = () => {
  const [showNav, toggleShowNav] = useState(true);
  return (
    <NavWrapper>
      <div className="profile navSection">
        <div className="profile-pic">
          <img
            style={{ margin: "0 0 20px 0" }}
            height="65px"
            width="65px"
            src={require(`../assets/account-box.png`)}
          />
        </div>
        <div className="arrowToggle">
          <p>Hello: Student Name!</p>
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
          <StyledLink to="/dashboard">
            <i className="material-icons">dashboard</i>
            Dashboard
          </StyledLink>
        </div>
        <div className="navWrapperDiv">
          <StyledLink to="/help-student">
            <i className="material-icons">list_alt</i>
            Create Help Ticket
          </StyledLink>
        </div>
        <div className="navWrapperDiv">
          <StyledLink to="/open-tickets">
            <i className="material-icons">assignment</i>
            Open Tickets
          </StyledLink>
        </div>
        <div className="navWrapperDiv">
          <div className="studentUI">
            <StyledLink to="/assigned-tickets">
              <i className="material-icons">assignment</i>
              Assigned Tickets
            </StyledLink>
          </div>
        </div>
      </div>
      <div className="account-StyledLinks navSection">
        <div className="navWrapperDiv">
          <StyledLink to="/logout-page">
            <i className="material-icons">settings_applications</i>
            Log Out
          </StyledLink>
        </div>
        <div className="navWrapperDiv">
          <img
            style={{ margin: "0 2px" }}
            height="22px"
            width="22px"
            src={require(`../assets/lambda-logo.jpg`)}
          />
          <StyledLink to="/student-account">Student Account</StyledLink>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navigation;
