import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
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
  text-align: center;
`;

const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
    return (
        <ModalBackground>
            <ModalContainer>
                <p>{message}</p>
                <ModalButton onClick={onConfirm}>Yes</ModalButton>
                <ModalButton onClick={onCancel}>No</ModalButton>
            </ModalContainer>
        </ModalBackground>
    );
};

export default ConfirmationModal;
