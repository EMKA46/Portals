import React, { useState } from "react";
import styled from "styled-components";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  const isDisabled = text.trim() === "";

  return (
    <InputContainer>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напишите сообщение..."
      />
      <SendButton onClick={handleSend} disabled={isDisabled}>
        Отправить
      </SendButton>
    </InputContainer>
  );
};


const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 5px;
  padding: 5px;
`;

const SendButton = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export default MessageInput;
