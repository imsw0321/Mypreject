import '../CSS/Introduce.css';

function SelfIntro2() {

    return (
        <div className="Maincontent_SelfIntro">

            <div className="Intro_box_self">
                <p>
                <img src={process.env.PUBLIC_URL + "/technical.png"} width="20px" height="20px" alt="tech" />
                    기술</p>
                <hr></hr>
                <p>C언어 ★★☆☆</p>
                <p>React ★★★☆☆</p>
                <p>Python ★★★★☆</p>
                <p>Rcode ★★★☆☆</p>
            </div>
            <div className="Intro_box_self">
                <p>
                <img src={process.env.PUBLIC_URL + "/card.png"} width="20px" height="18px" alt="card" />
                    자격증</p>
                <hr></hr>
                <p>2022.06 운전면허 2종</p>
                <p>2023.07 컴퓨터활용능력 1급 필기</p>
                
            </div>
          
        </div >
    );
}


export default SelfIntro2;
