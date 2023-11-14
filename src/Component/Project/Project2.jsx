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
        <p>
           이 프로젝트는 학교에서 진행하는 학습공동체라는 프로그램을 통해 진행했습니다.
           학습공동체는 조를 만들고, 수강하는 과목을 정하여 함께 공부하자는 프로그램입니다.
           제가 함께한 조는 학습공동체 프로그램에서 고급웹프로그래밍 리액트를 가지고 하나의 개인 프로젝트를 만들자는 목표를 세웠습니다.
           이에 따라, 저는 리액트를 활용하여 Post와 List를 작성하는 사이트를 제작하고 싶었고, POST-LIT 이라는 이름으로 프로젝트를 진행했습니다.   
          </p>
          
          <div className="Project_image_photo">
        <img src={process.env.PUBLIC_URL + "/image_project2_web1.png"} width="1000px" height="400px" alt="logo" ></img>
        </div>

          
        </div>
      </Modal>
    </div>
  );
}

export default Project2;
