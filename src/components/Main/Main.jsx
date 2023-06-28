import React from "react";
import Banner from "../Banner/Banner";
import styled from "styled-components";
import Introduce from "../Introduce/Introduce";
import AboutIndex from "../AboutIndex/AboutIndex";
import Youtube from "../Youtube/Youtube";
import ScrollTop from "../hooks/ScrollTop";
import Navbar from "../navbar/navbar";
import SubMenu from "../SubMenu/SubMenu";

const Container = styled.main`
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

const Main = () => {
  return (
    <>
      <ScrollTop />
      <Navbar />
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
          <SubMenu />
        </Section>
      </Container>
    </>
  );
};

export default Main;
