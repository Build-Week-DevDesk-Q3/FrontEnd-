import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  background: #b91432;
  height: 94px;
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
  return (
    <HeaderDiv>
      <i class="material-icons">menu</i>
      <HeaderText>DevDesk Queue</HeaderText>
      <i class="material-icons">search</i>
    </HeaderDiv>
  );
}

export default HeaderComponent;
