import React from "react";
import Banner from "components/Banner/Banner";
import styled from "styled-components";
import History from "components/History/History";
import AboutIndex from "components/AboutIndex/AboutIndex";
import Youtube from "components/Youtube/Youtube";
import Navbar from "components/navbar/Navbar";
import Discography from "components/Discography/Discography";
import GallaryPreview from "components/GallaryPreview/GallaryPreview";
import Footer from "components/Footer/Footer";

const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0;
  display: ${(props) => (props.toggle ? "none" : "block")};
`;

const Main = ({ loading }) => {
  return (
    <>
      <Navbar />
      <Container toggle={loading}>
        <section id='banner'>
          <Banner />
        </section>

        <section id='discography'>
          <Discography />
        </section>

        <section id='about'>
          <AboutIndex />
        </section>

        <section id='history'>
          <History />
        </section>

        <section id='youtube'>
          <Youtube />
        </section>

        <section id='gallary_preview'>
          <GallaryPreview />
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default Main;
