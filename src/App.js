import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Project from "./Component/Project";
import SelfIntro from "./Component/Introduce/SelfIntro";
import Object from "./Component/Object";

function App() {
  return (
    <BrowserRouter>
    <header>
      <div>
        <img src="/LoGO.png" width="150px"height="100px" alt="logo" ></img>
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
      
    </footer>
    </BrowserRouter>
  );
}

export default App;
