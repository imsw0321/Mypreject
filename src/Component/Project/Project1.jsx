

import React, { useState } from 'react';
import './Project1.css'; // Project1 컴포넌트의 스타일 파일 import

const Project1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //isMadalOpen: 모달이 열려있는지 여부를 나타내는 상태변수
  //openModal: 모달을 열기 위한 함수
  //closeModal: 모달을 닫기 위한 함수
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h2>Project1 Content</h2>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project1;
