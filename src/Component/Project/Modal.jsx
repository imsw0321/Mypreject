import React from 'react';
import styles from '../CSS/Modal.css';

function Modal({ setModalOpen, title, content, writer }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
        <img
          className={styles.modalImage}
          src={process.env.PUBLIC_URL + "/LoGo.png"}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Modal;
