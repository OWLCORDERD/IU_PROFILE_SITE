import {React, useEffect , useState} from 'react'
import './gallary.css'
import UseFetch from '../hooks/UseFetch'
import Navbar from "../navbar/navbar"
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

const Gallary = () => {

  const [loding, setLoding] = useState(false);

  useEffect(()=> {

    setLoding(!loding);

    setTimeout(()=>{
    setLoding(loding)
    },3000)
  },[])

  const data = UseFetch('http://localhost:3001/Gallary');
  return (
    <>
    {loding ? (
    <Loading loading = {loding}/>
    ) : (
    <div className = "Gallary-container">

      <div className = "Gallary-contents">
        <div className = "Gallary-subTitle">
          <h1>2022 new iu collection</h1>
        </div>

        <div className = "Gallary-title">
          <h1>New Magazine</h1>
        </div>
      </div>

      <div className = "Gallary-buttons">
      <Link to = "/">
      <button className = "View-button">
        Home
      </button>
      </Link>

      <button className = "View-button">
        View more
      </button>
      </div>

    </div>
    )}
    </>
  )
}

export default Gallary