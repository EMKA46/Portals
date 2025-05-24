import React from "react";
import styled from "styled-components";
import MessageItem from "./MessageItem";

const MessageList = ({ messages, deleteMessage, backgroundMessage }) => {
  return (
    <ListContainer>
      {messages.map((msg) => (
        <MessageItem
          key={msg.id}
          sms={msg.sms}
          time={msg.time}
          onDelete={() => deleteMessage(msg.id)}
          onCheck={() => backgroundMessage(msg.id)}
          isRead={!!msg.background}
          background={msg.background}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 5px;
`;

export default MessageList;
