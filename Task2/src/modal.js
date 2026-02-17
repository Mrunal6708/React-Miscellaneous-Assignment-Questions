import React from "react";
import ReactDOM from "react-dom/client";
import Modal from './modal.js';


const ModalRoot = document.getElementById("modal-root");

function Modal({ isOpen,onClose,children }) {
    if (!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <h2>Modal Title</h2>
                {children}
                <button onClick={onClose} style={buttonStyle}>Close Modal</button>
            </div>
        </div>
    );
}

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const modalStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
};

const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    cursor: "pointer",
    color: "#fff",
    border: "none",
    borderRadius: "4px"
};

export default Modal;