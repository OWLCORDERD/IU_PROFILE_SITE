import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallary from "./components/Gallary/Gallary";
import GListItem from "./components/Gallary/GListItem";
import Join from "./components/Register/Join";
import Login from "./components/Register/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Gallary" element={<Gallary />}></Route>
          <Route path="/GallaryItem" element={<GListItem />}></Route>
          <Route path="/Join" element={<Join />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
