import React from "react";
import Banner from "components/Banner/Banner";
import styled from "styled-components";
import History from "components/History/History";
import AboutIndex from "components/AboutIndex/AboutIndex";
import Youtube from "components/Youtube/Youtube";
import Navbar from "components/navbar/navbar";
import ActorList from "components/ActorList/ActorList";
import Discography from "components/Discography/Discography";
import GallaryPreview from "components/GallaryPreview/GallaryPreview";

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
          <History />
        </Section>

        <Section>
          <Youtube />
        </Section>

        <Section>
          <GallaryPreview />
        </Section>

        <Section>
          <ActorList />
        </Section>
      </Container>
    </>
  );
};

export default Main;
