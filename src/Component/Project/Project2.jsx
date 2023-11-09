// src/Component/Project2.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import '../CSS/Project.css';

function Project2() {
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
        <img src={process.env.PUBLIC_URL + '/image_project2_main2.png'} width="800px" height="500px" alt="sw" />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {/* 프로젝트 2의 내용이나 추가 정보를 여기에 표시 */}
        <h2>프로젝트 2</h2>
        <p>프로젝트 2의 설명이나 내용이 여기에 들어갈 수 있어. 어느정도까지 내용이 제공되는지 확인하기 위한 단계이다요</p>
      </Modal>
    </div>
  );
}

export default Project2;
