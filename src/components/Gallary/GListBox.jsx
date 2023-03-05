import React from 'react'
import './gallary.css'
import { Link, useLocation } from 'react-router-dom';

const GListBox = () => {

    const location = useLocation();
    const ComponyData = location.state.Compony;
    const sinceFilter = location.state.Filter;

    const filterCompony = sinceFilter.filter(sinceFilter=> sinceFilter.Compony === ComponyData);
    const update2022 = filterCompony.filter(filterCompony => filterCompony.since === 2022);
    const main2022 = update2022.filter(update2022 => update2022.logo !== undefined);
    const update2023 = filterCompony.filter(filterCompony => filterCompony.since === 2023);
    const main2023 = update2023.filter(update2023 => update2023.logo !== undefined);


  return (
    <div className = "GListBox-container">
        <header className = "GListBox-header">
            <img src = {filterCompony[0].img_url} alt = ""/>
            <div className = "GListBox-title">
            <h1>{filterCompony[0].Compony}</h1>
            <p>Scroll to View More the various pictorials</p>
            </div>

        </header>

        <div className = "GListBox-mapBox">
            
            {main2022.map((item)=> {
                return(
                <div className = "mapBox-item" key={item.id}>

                <Link to = "/GallaryItem" state={{filter : filterCompony, layoutId : item}}>
                    <div className = "mapBox-imgbox">
                        <img src = {item.img_url}/>
                    </div>
                </Link>
                </div>
                )
            })}

        {main2023.map((item)=> {
                return(
                <div className = "mapBox-item" key={item.id}>

                    <Link to = "/GallaryItem" state={{filter : filterCompony, layoutId : item}}>
                    <div className = "mapBox-imgbox">
                        <img src = {item.img_url}/>
                    </div>
                    </Link>
                </div>
                )
        })}
        </div>
    </div>
  )
}

export default GListBox