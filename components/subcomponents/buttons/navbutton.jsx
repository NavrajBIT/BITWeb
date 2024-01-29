"use client";
import { useState } from "react";
import style from "./button.module.css";
import Link from "next/link";

const Navbutton = ({ title, drop, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (link && !drop)
    return (
      <Link href={`#${link}`} className={style.navbutton}>
        {title}
      </Link>
    );

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
