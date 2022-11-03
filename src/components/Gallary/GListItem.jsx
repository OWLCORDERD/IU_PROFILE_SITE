import React from 'react'

const GListItem = ({itemLayoutId, Gallarydb}) => {

    const textFliter = Gallarydb.filter(Gallarydb => Gallarydb.title === itemLayoutId);
  return (
    <div className = "GListItem-container">
        {textFliter.map((item)=>{
        return(
        <div className = "GListItem-Box">
            <img src = {item.img_url} alt = ""/>
        </div>
        )
        })}
    </div>
  )
}

export default GListItem