import '../CSS/Introduce.css';

function SelfIntro() {

    return (
        <div className="Maincontent_SelfIntro">
            <div>
                <img src={process.env.PUBLIC_URL + "/image_sw.jpg"} width="250px" height="300px" alt="sw" ></img>
            </div>
            <div className="Intro_box">
                <h1> 데이터 분석가가 되고 싶은 김선우입니다.</h1>
                <br></br>

                전화번호:010-0000-0000<br></br>
                이메일: imsw0321@gachon.ac.kr
            </div>
        </div >
    );
}


export default SelfIntro;
