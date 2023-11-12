
/*import React, { useState } from "react";*/

import React from 'react';
import '../CSS/Modal.css';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="Modal_container" onClick={onClose}>
            <div className="Modal_box" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="Modal_close_button">
                    X
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;


