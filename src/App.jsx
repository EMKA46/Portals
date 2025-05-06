import React, { useState } from "react";
import Chat from "./components/Chat";
import Modal from "./components/modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]); // хранилище сообщений тут

  const handleDeleteAll = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setMessages([]); // удаление всех сообщений
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={styles.app}>
      <Chat messages={messages} setMessages={setMessages} />
      <button onClick={handleDeleteAll}>Удалить все</button>
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
    flexDirection: "column",
  },
};

export default App;
