import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Footer from '../Footer/Footer'
import SubMenus from "../SubMenus/SubMenus"
import styled from "styled-components"
const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading);
    }, 3000);
  }, []);

  const Container = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  top : 0;
  left : 0;
  padding : 0;
  `

  const Section = styled.section`
  position : relative;
  width : 100%;
  height : 100%;
  display : block;
  `

  return (
    <>
      <Container>
        <Section>
        <Banner />
        <Category />
        <SubMenus />
        <Footer />
        </Section>
      </Container>
    </>
  );
};

export default Main;
