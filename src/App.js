import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import ProfileInfo from "./components/About/ProfileInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Magazine from "./components/Magazine/Magazine";
import Gallary from "./components/Gallary/Gallary";
import GallaryList from "./components/Gallary/GallaryList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Profile" element={<ProfileInfo/>}></Route>
          <Route path="/Megazine" element={<Magazine/>}></Route>
          <Route path="/Gallary" element={<Gallary/>}></Route>
          <Route path="/GallaryList" element={<GallaryList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
