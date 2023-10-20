import React from "react";
import Banner from "components/Banner/Banner";
import styled from "styled-components";
import Introduce from "components/Introduce/Introduce";
import AboutIndex from "components/AboutIndex/AboutIndex";
import Youtube from "components/Youtube/Youtube";
import Navbar from "components/navbar/navbar";
import SubMenu from "components/SubMenu/SubMenu";
import FanCafe from "components/FanCafe/FanCafe";
import Discography from "components/Discography/Discography";

const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0;
  display: none;

  &#active {
    display: block;
  }
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
`;

const Main = ({ loading }) => {
  return (
    <>
      <Navbar />
      <Container id={loading ? "" : "active"}>
        <Section>
          <Banner />
        </Section>

        <Section>
          <Discography />
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
