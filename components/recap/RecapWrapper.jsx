// src/components/recap/RecapWrapper.js
import React, { useEffect, useState } from "react";
import RecapMobile from "./RecapMobile";
import Recap from "./Recap";

const RecapWrapper = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <RecapMobile /> : <Recap />;
};

export default RecapWrapper;
