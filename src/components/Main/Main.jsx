import React, { useEffect, useState } from "react";
import "../Main/main.css"
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Footer from '../Footer/Footer'
import SubMenus from "../SubMenus/SubMenus"
const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);

    setTimeout(() => {
      setLoading(loading);
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <section>
        <Banner />
        <Category />
        <SubMenus />
        <Footer />
        </section>
      </div>
    </>
  );
};

export default Main;
