import React, { useState } from 'react';
import Modal from '../Component/Project/Modal';
import Project1 from '../Component/Project/Project1';
import '../Component/CSS/Project.css';


function Project() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
    <div className="Project_box">
             <img src={process.env.PUBLIC_URL + "/image_project1_main1.png"} width="800px" height="500px" alt="sw" ></img> 
      </div>
      <div className="Project_box">
             <img src={process.env.PUBLIC_URL + "/image_project2_main2.png"} width="800px" height="500px" alt="sw" ></img> 
      </div>             
      <div>

        <button onClick={openModal}>모달 열기</button>
        {modalOpen && (
          <Modal
            setModalOpen={setModalOpen}
            id="modal"
            title="프로젝트 상세 정보"
            content={<Project1 />}
            writer="작성자"
          />
        )}
      </div>

    </div>
  );
}

export default Project;


