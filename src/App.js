import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallary from "./components/Gallary/Gallary";
import GListItem from "./components/Gallary/GListItem";
import GallaryBoard from "./components/Gallary/GallaryBoard";

function App() {
  window.onpopstate = function (event) {
    // "event" object seems to contain value only when the back button is clicked
    // and if the pop state event fires due to clicks on a button
    // or a link it comes up as "undefined"
    if (event) {
      window.location.reload();
    } else {
      alert("버그 발생");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/Gallary' element={<Gallary />}></Route>
          <Route path='/GallaryItem' element={<GListItem />}></Route>
          <Route path='/GallaryBoard' element={<GallaryBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
