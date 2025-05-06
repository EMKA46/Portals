import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  console.log("Modal isOpen:", isOpen); 

  if (!isOpen) return null; 

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
        <ModalContent>
          <h3>Вы уверены?</h3>
          <ButtonContainer>
            <Button onClick={onConfirm}>Да</Button>
            <Button onClick={onClose}>Нет</Button>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default Modal;
