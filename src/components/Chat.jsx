import React from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chat = ({ messages, setMessages }) => {
  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      sms: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const backgroundMessage = (id) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id
          ? { ...msg, background: msg.background ? null : "#0acc0a" }
          : msg
      )
    );
  };

  return (
    <div style={styles.chat}>
      <ChatHeader name="Nurs Agai" />
      <p className="agai">Э ищяк где домашка (10:30)</p>
      <MessageList
        messages={messages}
        deleteMessage={deleteMessage}
        backgroundMessage={backgroundMessage}
      />
      <MessageInput onSend={addMessage} />
    </div>
  );
};

const styles = {
  chat: {
    width: "300px",
    height: "400px",
    border: "2px solid red",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
};

export default Chat;
