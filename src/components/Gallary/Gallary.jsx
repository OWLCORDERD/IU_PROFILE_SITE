import { React, useEffect, useState } from "react";
import "../../assets/styles/gallary.css";
import GallaryBanner from "./GallaryBanner";
import GallaryList from "./GallaryList";
import Loading from "../Loading/Loading";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollTop from "../hooks/ScrollTop";

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #000;
`;

const Gallary = () => {
  const [gallaryLoading, setGallaryLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGallaryLoading(false);
    }, 3000);

    return () => setGallaryLoading(true);
  }, []);

  return (
    <>
      {gallaryLoading ? (
        <Loading loading={gallaryLoading} />
      ) : (
        <>
          <ScrollTop />
          <Section>
            <Navbar />
            <GallaryBanner />
            <GallaryList />
            <Footer />
          </Section>
        </>
      )}
    </>
  );
};

export default Gallary;
