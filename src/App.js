import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Project from "./Component/Project";
import SelfIntro from "./Component/Introduce/SelfIntro";
import Object from "./Component/Object";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <header>
      <div>
        <img src={process.env.PUBLIC_URL+"/LoGo.png"} width="150px"height="100px" alt="logo" ></img>
      </div>
    </header>
    <div>
      <nav className="Navbar">
        <ul>
        <li className="menulink"><Link to={"/Introduce"}>Introduce</Link></li>
        <li className="menulink"><Link to={"/Project"}>Project</Link></li>
        <li className="menulink"><Link to={"/Object"}>Object</Link></li>
        </ul>
      </nav>
      <main className="Maincontent">
        <Routes>
          <Route path="/Introduce" element={<SelfIntro/>}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Object" element={<Object />}></Route>
        </Routes>
      </main>
    </div>
    <footer>
      <div className="Footer">202231146 | 김선우 | imsw0321@gachon.ac.kr </div>
    </footer>
    </BrowserRouter>
  );
}

export default App;
