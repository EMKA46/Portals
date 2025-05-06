import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };
  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
        placeholder="Напишите сообщение..."
      />
      <button
        onClick={handleSend}
        style={{
          ...styles.button,
          ...(text.trim() === "" ? styles.buttonDisabled : {}),
        }}



        
        disabled={text.trim() === ""}
      >
        Отправить
      </button>
    </div>
  );
};

const styles = {
  inputContainer: {
    display: "flex",
    marginTop: "10px",
  },
  input: {
    flexGrow: 1,
    marginRight: "5px",
    padding: "5px",
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonDisabled: {
    backgroundColor: "gray",
    cursor: "not-allowed",
  },
};

export default MessageInput;
