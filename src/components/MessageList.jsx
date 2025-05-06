import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messages, deleteMessage,backgroundMessage }) => {
  return (
    <div style={styles.list}>
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
    </div>
  );
};

const styles = {
  list: {
    flexGrow: 1,
    overflowY: "auto",
    padding: "5px",
  },
};

export default MessageList;
