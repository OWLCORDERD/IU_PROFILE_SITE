import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GallaryList = () => {
  const [gallaryData, setGallaryData] = useState([]);

  const [totalData, setTotalData] = useState([]);

  const [hasNextPage, setHasNextPage] = useState(true);

  const BoxRef = useRef(null);

  const page = useRef(1);

  const [isloading, setIsloading] = useState(false);

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3080/Gallary?_limit=6&_page=${page.current}`
      );
      setGallaryData((prev) => [...prev, ...data]);
      setHasNextPage(data.length === 6);
      if (data.length) {
        page.current += 1;
        setIsloading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (!BoxRef.current || !hasNextPage) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsloading(true);
        setTimeout(function () {
          fetch();
        }, 1000);
      }
    });
    io.observe(BoxRef.current);
    return () => {
      io.disconnect();
      setIsloading(false);
    };
  }, [fetch, hasNextPage]);

  useEffect(() => {
    axios
      .get("http://localhost:3080/Gallary")
      .then((res) => res.data)
      .then((data) => setTotalData(data));

    return () => setHasNextPage(false);
  }, []);

  return (
    <div className='GallaryList-container'>
      <div className='GallaryList-header'>
        <div className='GallaryList-title'>
          <h1>Gallary</h1>
        </div>
        <ul className='GallaryList-filter'>
          <li className='active'>
            <span>ALL</span>
          </li>
          <li>
            <span>FASHION</span>
          </li>
          <li>
            <span>CF</span>
          </li>
        </ul>
        <div className='Search-input'>
          <input type='text' placeholder='검색어를 입력하세요.' />
        </div>

        <div className='result-count'>
          <h1>{totalData.length} Results</h1>
        </div>
      </div>
      <div className='Gallary-Board'>
        <div className='GallaryList-Box'>
          {gallaryData.map((item) => {
            return (
              <Link
                to='/GallaryBoard'
                state={{ layoutId: item.id }}
                key={item.id}
              >
                <div className='Gallary-item'>
                  <div className='Gallary-imgBox'>
                    <img src={item.img_url} alt='img-url'></img>
                  </div>

                  <div className='Gallary-info'>
                    <div className='Gallary-type'>
                      <h2>{item.type}</h2>
                    </div>
                    <div className='Gallary-title'>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {isloading ? (
          <div className='Loading'>
            <div className='spinner'></div>
          </div>
        ) : null}
        <div ref={BoxRef} />
      </div>
    </div>
  );
};

export default GallaryList;
