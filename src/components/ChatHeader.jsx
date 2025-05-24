import React from "react";
import styled from "styled-components";

const ChatHeader = ({ name }) => {
  return (
    <Header>
      <h3>{name}</h3>
    </Header>
  );
};

const Header = styled.div`
  border-bottom: 1px solid red;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

export default ChatHeader;
