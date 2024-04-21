import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
      {mainLoading ? (
        <Loading loading={mainLoading} />
      ) : (
        <>
          <ScrollTop />
          <Main loading={mainLoading} />
        </>
      )}
    </>
  );
};

export default RootMain;
