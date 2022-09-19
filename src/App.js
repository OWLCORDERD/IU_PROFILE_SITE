import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Profile" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
