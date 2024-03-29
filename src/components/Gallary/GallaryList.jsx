import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { commonService } from "../service";

const GallaryList = () => {
  const [gallaryData, setGallaryData] = useState([]);

  const [totalData, setTotalData] = useState([]);

  const [hasNextPage, setHasNextPage] = useState(true);

  const BoxRef = useRef(null);

  const page = useRef(1);

  const [isloading, setIsloading] = useState(false);

  const fetch = async () => {
    try {
      const page_size = 6;

      const { data } = await axios.post(`https://iuprofile.site/GallaryList`, {
        curPage: page.current,
        pageSize: page_size,
      });

      setGallaryData((prev) => [...prev, ...data]);
      setHasNextPage(data.length === 6);
      if (data.length) {
        page.current += 1;
        setIsloading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!BoxRef.current || !hasNextPage) return;
    const io = new IntersectionObserver((entries) => {
      setIsloading(true);
      setTimeout(() => {
        if (entries[0].isIntersecting) {
          fetch();
        }
      }, 500);
    });
    io.observe(BoxRef.current);

    return () => {
      io.disconnect();
    };
  }, [hasNextPage]);

  useEffect(() => {
    commonService.getGallary().then((res) => {
      setTotalData(res);
    });

    return () => setTotalData([]);
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

        <div className='result-count'>
          <h1>{totalData.length} Results</h1>
        </div>
      </div>
      <div className='Gallary-Board'>
        <div className='GallaryList-Box'>
          {gallaryData.map((item) => {
            return (
              <Link to='/GallaryBoard' state={{ layoutId: item.id }}>
                <div className='Gallary-item' key={item.id}>
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
