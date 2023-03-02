import {React, useEffect , useState} from 'react'
import './gallary.css'
import GallaryBanner from './GallaryBanner'
import GallaryList from './GallaryList'
import Loading from '../Loading/Loading'

const Gallary = () => {
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

        </header>

      <GallaryBanner/>
      <GallaryList/>
    </section>
    )}
    </>
  )
}

export default Gallary