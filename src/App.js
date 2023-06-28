import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallary from "./components/Gallary/Gallary";
import GallaryBoard from "./components/Gallary/GallaryBoard";
import RootMain from "./components/Main/RootMain";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootMain />}></Route>
          <Route path='/Gallary' element={<Gallary />}></Route>
          <Route path='/GallaryBoard' element={<GallaryBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
