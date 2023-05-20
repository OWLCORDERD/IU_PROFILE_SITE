import { useRef, useEffect } from "react";

const UseInterval = (callback, delay) => {
  const saveCallBack = useRef();

  useEffect(() => {
    saveCallBack.current = callback;
  });

  useEffect(() => {
    function init() {
      saveCallBack.current();
    }

    let incrementCount = setInterval(init, delay);

    return () => clearInterval(incrementCount);
  }, [delay]);
};

export default UseInterval;
