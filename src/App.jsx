import React, { useState } from "react";
import styled from "styled-components";
import Chat from "./components/Chat";
import Modal from "./components/modal";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  flex-direction: column;
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleDeleteAll = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setMessages([]);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <AppWrapper>
      <Chat messages={messages} setMessages={setMessages} />
      <button onClick={handleDeleteAll}>Удалить все</button>
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </AppWrapper>
  );
};

export default App;
