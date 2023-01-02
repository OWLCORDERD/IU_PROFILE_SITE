import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import ProfileInfo from "./components/About/ProfileInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallary from "./components/Gallary/Gallary";
import GallaryList from "./components/Gallary/GallaryList";
import GListBox from "./components/Gallary/GListBox";
import YoutubeData from "./components/YoutubeData";
import axios from "axios";
import { useEffect } from "react";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Profile" element={<ProfileInfo/>}></Route>
          <Route path="/Gallary" element={<Gallary/>}></Route>
          <Route path="/GallaryList" element={<GallaryList/>}></Route>
          <Route path="/GallaryBox" element={<GListBox/>}></Route>
          <Route path="/Youtube" element={<YoutubeData/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
