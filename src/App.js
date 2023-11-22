import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';


import Main from './Component/Show/Main';
import Project from './Component/Show/Project';
import SelfIntro from './Component/Show/SelfIntro';
import Object from './Component/Show/Object';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <div>
          <img src={process.env.PUBLIC_URL + "/LoGo.png"} width="150px" height="100px" alt="logo" ></img>
        </div>
      </header>
      <div>
        <nav className="Navbar">
          <ul>
            <li className="menulink"><Link to={"/Main"}>Main</Link></li>
            <li className="menulink"><Link to={"/SelfIntro"}>Introduce</Link></li>
            <li className="menulink"><Link to={"/Project"}>Project</Link></li>
            <li className="menulink"><Link to={"/Object"}>Object</Link></li>
          </ul>
        </nav>
        <main className="Maincontent">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Main" element={<Main />}></Route>
            <Route path="/SelfIntro" element={<SelfIntro />}></Route>
            <Route path="/Project" element={<Project />}></Route>
            <Route path="/Object" element={<Object />}></Route>
          </Routes>
        </main>
      </div>
      <footer>
        <div className="Footer">202231146 | 김선우 | https://github.com/imsw0321 </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
