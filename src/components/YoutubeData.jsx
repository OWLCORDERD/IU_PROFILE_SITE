import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const YoutubeData = (url) => {

    const [datas, setdatas] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setdatas(data)
        })
    },[url])

    
  return (
    datas
  )
}

export default YoutubeData