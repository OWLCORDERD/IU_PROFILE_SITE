import { React, useEffect, useState } from "react";
import "../../assets/styles/gallary.css";
import GallaryBanner from "./GallaryBanner";
import GallaryList from "./GallaryList";
import Loading from "../Loading/Loading";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../navbar/navbar";

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

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Section>
          <Navbar />
          <GallaryBanner />
          <GallaryList />
        </Section>
      )}
    </>
  );
};

export default Gallary;
