import React from "react";

const ChatHeader = ({ name }) => {
  return (
    <div style={styles.header}>
      <h3>{name}</h3>
    </div>
  );
};

const styles = {
  header: {
    borderBottom: "1px solid red",
    paddingBottom: "5px",
    marginBottom: "10px",
    textAlign: "center",
  },
};

export default ChatHeader;
