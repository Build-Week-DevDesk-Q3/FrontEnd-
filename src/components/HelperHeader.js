import React from "react";
import styled from "styled-components";

const HelperHeaderDiv = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  background: #423f40;
  height: 80px;
  width: 100%;
  color: #fff;
`;

const HelperHeaderText = styled.div`
  flex-grow: 2;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
`;

function HelperHeaderComponent() {
  return (
    <HelperHeaderDiv>
      <HelperHeaderText>DevDesk Queue</HelperHeaderText>
      <i className="material-icons">search</i>
    </HelperHeaderDiv>
  );
}

export default HelperHeaderComponent;
