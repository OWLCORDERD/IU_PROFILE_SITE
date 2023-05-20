import { React, useEffect, useState } from "react";
import "../../assets/styles/gallary.css";
import GallaryBanner from "./GallaryBanner";
import GallaryList from "./GallaryList";
import Loading from "../Loading/Loading";
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import ScrollTop from "../hooks/ScrollTop";

const Gallary = () => {
  const [loading, setLoading] = useState(false);

  const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    background-color: #000;
  `;

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <ScrollTop />
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Section>
          <Navbar />
          <GallaryBanner />
          <GallaryList />
          <Footer />
        </Section>
      )}
    </>
  );
};

export default Gallary;
