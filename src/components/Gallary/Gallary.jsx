import {React, useEffect , useState} from 'react'
import './gallary.css'
import GallaryBanner from './GallaryBanner'
import GallaryList from './GallaryList'
import Loading from '../Loading/Loading'
import styled from 'styled-components'

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

  const Section = styled.section`
  position : relative;
  width : 100%;
  height : 100%;
  display : inline-block;
  background-color : #000;
  `

  const GlistHeader = styled.header`
  position: fixed;
  top : 0;
  right : 0;
  width : 20%;
  height : 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 100;
  background-color: transparent;
  border-left : 2px solid #fff;
  `

  return (
    <>
    {loading ? (
    <Loading loading = {loading}/>
    )
    : (
    <Section>
    <GlistHeader>
      <div className = "Gallary-hamburgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div className = "GList-title">
          <h1>MEGAZINE</h1>
          <p>Scroll through the year selection box to check the various pictorials by year.</p>
        </div>

      </GlistHeader>

      <GallaryBanner/>
      <GallaryList/>
    </Section>
    )}
    </>
  )
}

export default Gallary