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
  const openWindow = (url) => {
    window.open(url, '_blank', 'width=600,height=600');
};

  return (
    <div className="Project">
      <div className="Project_name">Project1</div>
      <div className="Project_guide">아래를 눌러주세요.</div>
      <div className="Project_box" onClick={openModal}>
        <img src={process.env.PUBLIC_URL + '/image_project1_main11.png'} width="800px" height="500px" alt="sw" />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="Project_contents">
        <h2>유기 동물 정보 사이트</h2>
        <p>

          이 프로젝트는 웹프로그래밍 과제로 만들었던 프로그램입니다.
          해당 프로젝트는 HTML, CSS, Javascript를 활용한 프로젝트였습니다.
          최근, 유기견, 유기묘, 유기동물에 대한 사회적 문제가 심각해지면서, 이를 상기시킬 수 있는 프로젝트를 만들고 싶었습니다.
          따라서, 저는 이에 대한 정보를 제공하고자 유기 동물 정보 사이트를 프로젝트로 실시하게 되었습니다.
        </p>
        <div>
        <img src={process.env.PUBLIC_URL + '/github.png'} width="40px" height="40px" alt="github" 
                    onClick={() => openWindow('https://imsw0321.github.io/')}
                    style={{ cursor: 'pointer' }}/>
        </div>
        <div className="Project_image_photo">
        <img src={process.env.PUBLIC_URL + "/image_project1_web1.png"} width="500px" height="400px" alt="logo" ></img>
        <img src={process.env.PUBLIC_URL + "/image_project1_web2.png"} width="500px" height="400px" alt="logo" ></img>
        </div>
        </div>
      </Modal>
    </div>
  );
}

export default Project1;
