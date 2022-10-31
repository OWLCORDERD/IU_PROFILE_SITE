import React from 'react'
import UseFetch from '../hooks/UseFetch';
import './gallary.css'

const GListItem = ({layoutId, popup, data}) => {

    const filterVogue = data.filter(data=> data.Compony === layoutId);

  return (
    <div className = "GListItem-container">
        <header className = "GListItem-header">
            <div className = "GListItem-title">
            <h1>{layoutId}</h1>
            <p>Scroll through the year selection box to check the various pictorials by year.</p>
            </div>

        </header>

        <div className = "GListItem-box">
            
            {filterVogue.map((item)=> {
                return(
                <div className = "GListItem-item">

                    <div className = "GListItem-imgbox">
                        <img src = {item.img_url}/>
                    </div>
                </div>
                )
        })}
        </div>

    </div>
  )
}

export default GListItem