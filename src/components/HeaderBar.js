import React, { useState } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  background: #b91432;
  height: 80px;
  width: 100%;
  color: #fff;
`;

const HeaderText = styled.div`
  flex-grow: 2;
  margin-left: 80px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
`;

function HeaderComponent() {
  const [showNav, toggleShowNav] = useState(true);

  return (
    <HeaderDiv>
      <i className="material-icons">menu</i>
      <HeaderText>DevDesk Queue</HeaderText>
      <i className="material-icons">search</i>
    </HeaderDiv>
  );
}

export default HeaderComponent;
