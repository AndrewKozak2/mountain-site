import React, { useEffect, useState } from "react";
import s from "./Preloader.module.css";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${s.container} ${!isVisible ? s.hidden : ""}`}>
      <h1 className={s.title}>MNTN</h1>
    </div>
  );
};

export default Preloader;
