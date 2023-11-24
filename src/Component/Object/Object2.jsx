import '../CSS/Object.css';

function Object2() {
    return (
        <div className="Maincontent_Object">
            <div className="Intro_box_object">
                <p>
                <img src={process.env.PUBLIC_URL + "/dream.png"} width="40px" height="28px" alt="card" />
                    데이터분석가 이루기 위한 목표</p>
                <hr></hr>
                <ul className="Checklist">
                    <li><input type="checkbox" id="goal1" /> <label htmlFor="goal1">파이썬, R코드 등과 같은 코딩 능력 늘리기</label></li>
                    <li><input type="checkbox" id="goal2" /> <label htmlFor="goal2">머신러닝, 딥러닝에 대해 공부하기</label></li>
                    <li><input type="checkbox" id="goal3" /> <label htmlFor="goal3">개인 포트폴리오, 데이터 분석 프로젝트 진행하기</label></li>
                    <li><input type="checkbox" id="goal4" /> <label htmlFor="goal4">동아리 및 서포터즈 가입 후 그룹 프로젝트 진행하기</label></li>
                    <li><input type="checkbox" id="goal5" /> <label htmlFor="goal5">SQLD 자격증 따기</label></li>
                    <li><input type="checkbox" id="goal6" /> <label htmlFor="goal6">빅데이터분석기사 자격증 따기</label></li>
                    <li><input type="checkbox" id="goal7" /> <label htmlFor="goal7">ADSP 자격증 따기</label></li>
                </ul>
                <br />
                    <img src={process.env.PUBLIC_URL + "/object_image.png"} width="800px" height="300px" alt="sqld" ></img>

                
            </div>
        </div>
    );
}

export default Object2;
