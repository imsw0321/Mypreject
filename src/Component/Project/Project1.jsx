// src/Component/Project1.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import '../CSS/Project.css';

function Project1() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="Project">
      <div className="Project_box" onClick={openModal}>
        <img src={process.env.PUBLIC_URL + '/image_project1_main1.png'} width="800px" height="500px" alt="sw" />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {/* 프로젝트 1의 내용이나 추가 정보를 여기에 표시 */}
        <h2>프로젝트 1</h2>
        <p>프로젝트 1의 설명이나 내용이 여기에 들어갈 수 있어.</p>
      </Modal>
    </div>
  );
}

export default Project1;
