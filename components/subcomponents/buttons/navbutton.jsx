"use client";
import { useState } from "react";
import style from "./button.module.css";

const Navbutton = ({ title, drop }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={style.navbutton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
      {drop && <div className={style.downarrow}>{">"}</div>}
      {drop && isHovered && <>{drop}</>}
    </div>
  );
};

export default Navbutton;
