/**
 * @fileoverview Modal component for displaying a modal overlay with styled components.
 * @module Modal
 */
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

/**
 * Modal overlay styled component.
 * @component
 */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

/**
 * @component
 * Modal wrapper styled component.
 */
const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dde7f1;
  padding: 50px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 20px;
  border: 10px solid #334662;
`;

/**
 * Close button styled component.
 * @component
 */
const CloseButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #334662;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

/**
 * Modal component for displaying a modal overlay.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Flag indicating whether the modal is open or not.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {ReactNode} props.children - The content to be displayed inside the modal.
 *
 * @returns {JSX.Element|null} The modal component.
 *
 * @example
 * <Modal isOpen={isOpen} onClose={handleClose}>
 *   <p>Modal content</p>
 * </Modal>
 */
export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose}>
      <ModalOverlay />
      <ModalWrapper>
        {children}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalWrapper>
    </div>
  );
};
