import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url])


    return (
        data
    )
}

export default UseFetch