import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import Introduce from "../Introduce/Introduce";
import AboutIndex from "../AboutIndex/AboutIndex";
import Youtube from "../Youtube/Youtube";
import FanCafe from "../FanCafe/FanCafe";
import ScrollTop from "../hooks/ScrollTop";
const Main = () => {
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0;
  `;

  const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
  `;

  return (
    <>
      <ScrollTop />
      <Container>
        <Section>
          <Banner />
        </Section>

        <Section>
          <AboutIndex />
        </Section>

        <Section>
          <Introduce />
        </Section>

        <Section>
          <Youtube />
        </Section>

        <Section>
          <FanCafe />
        </Section>

        <Footer />
      </Container>
    </>
  );
};

export default Main;
