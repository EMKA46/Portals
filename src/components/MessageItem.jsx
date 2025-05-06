import React from "react";
import styled from "styled-components";

const MessageItem = ({ sms, time, onDelete, onCheck, isRead, background }) => {
  return (
    <div
      style={{ ...styles.item, backgroundColor: isRead ? "#0acc0a" : "red" }}
    >
      {sms} ({time}) {isRead && <span>прочитано</span>}
      <DeleteButton onClick={onDelete}>
        <Img src="https://w7.pngwing.com/pngs/111/249/png-transparent-computer-icons-rubbish-bins-waste-paper-baskets-symbol-miscellaneous-cdr-text.png"></Img>
      </DeleteButton>{" "}
      <input type="checkbox" checked={isRead} onChange={onCheck} />
    </div>
  );
};

const styles = {
  item: {
    marginBottom: "5px",
    color: "black",
  },
};
const DeleteButton = styled.button`
  background-color: white;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
  background-color: darkred;
`;
export default MessageItem;
