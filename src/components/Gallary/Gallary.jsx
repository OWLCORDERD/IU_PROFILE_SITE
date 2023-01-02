import {React, useEffect , useState} from 'react'
import './gallary.css'
import GallaryBanner from './GallaryBanner'
import GallaryList from './GallaryList'
import {motion} from "framer-motion"
import Loading from '../Loading/Loading'

const Gallary = () => {
  const [toggleclick, setToggleClick] = useState(false);
  const [clickYear, setClickYear] = useState("#2022");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(!loading);
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(loading);
    },[3000])
  },[])

  return (
    <>
    {loading ? (
    <Loading loading = {loading}/>
    )
    : (
    <section>
    <header className = "GList-header">
      <div className = "Gallary-hamburgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div className = "GList-title">
          <h1>MEGAZINE</h1>
          <p>Scroll through the year selection box to check the various pictorials by year.</p>
        </div>

          <div className = "select-years-container">
            <ul className = "select-years" id = {clickYear === "#2022" ? "active" : ""} >
                <li>
                <h1 className = "toggle-button" onClick={()=>setToggleClick(!toggleclick)}>▼</h1>
                </li>

                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2022"></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2020" onClick={()=>setClickYear("#2020") & setToggleClick(false)}></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2021" onClick={()=>setClickYear("#2021") & setToggleClick(false)}></input>
                </li>
            </ul>

            <ul className = "select-years" id = {clickYear === "#2021" ? "active" : ""}>
                <li>
                <h1 className = "toggle-button" onClick={()=>setToggleClick(!toggleclick)}>▼</h1>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2021"></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2020" onClick={()=>setClickYear("#2020") & setToggleClick(false)}></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2022" onClick={()=>setClickYear("#2022") & setToggleClick(false)}></input>
                </li>
            </ul>

            <ul className = "select-years" id = {clickYear === "#2020" ? "active" : ""}>
                <li>
                <h1 className = "toggle-button" onClick={()=>setToggleClick(!toggleclick)}>▼</h1>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2020"></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2021" onClick={()=>setClickYear("#2021") & setToggleClick(false)}></input>
                </li>
                <li className = {toggleclick === !false ? "active" : ''}>
                    <input type = "text" value = "2022" onClick={()=>setClickYear("#2022") & setToggleClick(false)}></input>
                </li>
            </ul>
            </div>

        </header>

      <GallaryBanner/>
      <GallaryList/>
    </section>
    )}
    </>
  )
}

export default Gallary