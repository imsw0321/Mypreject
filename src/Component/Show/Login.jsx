
import React from 'react';
import '../CSS/Login.css';

const Login = ({ id, pwd, changeId, changePwd, onLogin }) => {
  return (
    <div className="LoginContainer">
      <h2 align="center">LOGIN</h2>
      <table className="LoginForm" align="center">
        <tr>
          <td width="50%">아이디</td>
          <td>
            <input type="text" size="15" value={id} onChange={changeId} />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input type="password" size="15" value={pwd} onChange={changePwd} />
          </td>
        </tr>
      </table>
      <p>아이디 cbkim 비밀번호 1111로 확인해주세요</p>
      <button className="LoginButton" onClick={onLogin}>
        LOGIN
      </button>
    </div>
  );
};

export default Login;
