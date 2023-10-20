import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Main from "./Main";
import ScrollTop from "../hooks/ScrollTop";

const RootMain = () => {
  const [mainLoading, setmainLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setmainLoading(false);
    }, 3000);

    return () => setmainLoading(true);
  }, []);

  return (
    <>
      {mainLoading ? <Loading loading={mainLoading} /> : null}
      <>
        <ScrollTop />
        <Main loading={mainLoading} />
        <Footer loading={mainLoading} />
      </>
    </>
  );
};

export default RootMain;
