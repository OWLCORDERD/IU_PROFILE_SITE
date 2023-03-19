import { React, useEffect, useState } from "react";
import "../../assets/styles/gallary.css";
import GallaryBanner from "./GallaryBanner";
import GallaryList from "./GallaryList";
import Loading from "../Loading/Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Gallary = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading);
    }, [3000]);
  }, []);

  const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    background-color: #000;
  `;

  const GlistHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 100;
    background-color: transparent;
    padding: 0 2rem;
    background-color: #fff;
  `;

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Section>
          <GlistHeader>
            <Link to="/">
              <div className="home-button">
                <AiFillHome />
              </div>
            </Link>

            <div className="Gallary-hamburgerMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </GlistHeader>

          <GallaryBanner />
          <GallaryList />
        </Section>
      )}
    </>
  );
};

export default Gallary;
