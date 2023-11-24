import React from 'react';
import '../CSS/Main.css';

function Main() {
    const openWindow = (url) => {
        window.open(url, '_blank', 'width=600,height=600');
    };
    return (
        <div className="Maincontent_SelfIntro_Main">
            <div>
                <img src={process.env.PUBLIC_URL + "/image_sw.jpg"} width="250px" height="300px" alt="sw" />
            </div>
            <div className="Intro_box_Main">
                <h1> 데이터 분석가가 되고 싶은 김선우입니다.</h1>
                <p>
                    전화번호: 010-7211-4634<br />
                    이메일: imsw0321@gachon.ac.kr
                </p>
                <br></br>
                <div className="Logo_image">
                    <img src={process.env.PUBLIC_URL + '/instagram.png'} width="40px" height="40px" alt="instagram" 
                    onClick={() => openWindow('https://www.instagram.com/_sunuuoo_')}
                    style={{ cursor: 'pointer' }}/>
                    
                    <img src={process.env.PUBLIC_URL + '/github.png'} width="40px" height="40px" alt="github" 
                    onClick={() => openWindow('https://github.com/imsw0321')}
                    style={{ cursor: 'pointer' }}/>
                </div>
            </div>
        </div>

    );
}

export default Main;
