import React, { useState, useEffect } from 'react';
import '../CSS/Introduce.css'; 
import '../CSS/Introduce2.css'; 

import SelfIntro1 from '../Introduce/SelfIntro1';
import SelfIntro2 from '../Introduce/SelfIntro2';

function SelfIntro() {
  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    
    showSelfIntro1();
  }, []); 

  const showSelfIntro1 = () => {
    setSelectedContent(<SelfIntro1 />);
  };

  const showSelfIntro2 = () => {
    setSelectedContent(<SelfIntro2 />);
  };

  return (
    <div className="SelfIntroContainer">
      <div className="SefIntro_Subvar">
        <button className="SelfIntroButton" onClick={showSelfIntro1}>나의 정보</button>
        <button className="SelfIntroButton" onClick={showSelfIntro2}>자기소개서</button>
      </div>
      {selectedContent && <div className="SelectedContent">{selectedContent}</div>} 
    </div>
  );
}

export default SelfIntro;
