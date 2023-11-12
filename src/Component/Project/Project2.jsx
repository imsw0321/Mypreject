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
      <div className="Project_name">Project2</div>
      <div className="Project_guide">아래를 눌러주세요.</div>
      <div className="Project_box" onClick={openModal}>
        <img src={process.env.PUBLIC_URL + '/image_project2_main2.png'} width="800px" height="500px" alt="sw" />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="Project_contents">
        <h2>POST-LIT</h2>
        <p>제가 이 프로젝트를 실시하게 된 계기는 학교에서 진행하는 학습공동체라는 프로그램이 있습니다. 
          해당 프로그램은 하나의 과목에 대해 같이 공부하는 것을 말합니다. 저는 고급웹프로그래밍 학습공동체를 진행하여, 
          수업시간에 배운 내용을 가지고 POST-LIT이라는 개인 프로젝트 즉, 토이 프로젝트를 진행하였습니다.</p>
          
          <div className="Project_image_photo">
        <img src={process.env.PUBLIC_URL + "/image_project2_web1.png"} width="1000px" height="400px" alt="logo" ></img>
        </div>

          
        </div>
      </Modal>
    </div>
  );
}

export default Project2;
