import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 115%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(0,0,0,0.4);
  align-items: flex-start;
    animation: fadeIn 0.3s;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#333' : '#fff'}; 
  color: ${({ theme }) => theme === 'dark' ? 'white' : 'black'}; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  width: auto;  
  max-width: 255px;  
  position: fixed;   
  top: 21%;  
  left: 73%; 
  transform: translateX(-50%);  
  z-index: 1050;  
  display: block;  
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
   animation: slideIn 0.3s;
   
  
  @keyframes slideIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  color:  color: #707070;
  font-size: 28px;
  cursor: pointer;
`;

const Modal = ({ isOpen, children, onClose}) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
        <CloseButton onClick={e => { e.stopPropagation(); onClose(); }}>&times;</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
