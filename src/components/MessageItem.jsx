import React from "react";
import styled from "styled-components";

const MessageItem = ({ sms, time, onDelete, onCheck, isRead }) => {
  return (
    <ItemContainer isRead={isRead}>
      {sms} ({time}) {isRead && <span>прочитано</span>}
      <DeleteButton onClick={onDelete}>
        <TrashIcon src="https://w7.pngwing.com/pngs/111/249/png-transparent-computer-icons-rubbish-bins-waste-paper-baskets-symbol-miscellaneous-cdr-text.png" />
      </DeleteButton>
      <input type="checkbox" checked={isRead} onChange={onCheck} />
    </ItemContainer>
  );
};

// Стили

const ItemContainer = styled.div`
  margin-bottom: 5px;
  color: black;
  background-color: ${(props) => (props.isRead ? "#0acc0a" : "red")};
  padding: 5px;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background-color: white;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const TrashIcon = styled.img`
  width: 20px;
  height: 20px;
  background-color: darkred;
`;

export default MessageItem;
