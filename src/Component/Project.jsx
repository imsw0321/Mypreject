// Project.jsx

import { useState } from "react";
import Login from "./Login";
import '../Component/CSS/Project.css';
import React from 'react';
import Project1 from './Project/Project1';
import Project2 from './Project/Project2';

function Project() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleLogin = () => {
    if (id === "cbkim" && pwd === "1111") {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return (
      <div>
        <Project1 />
        <Project2 />
      </div>
    );
  } else {
    return (
      <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} onLogin={handleLogin} />
    );
  }
}

export default Project;
