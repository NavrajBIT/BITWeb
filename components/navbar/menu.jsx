"use client";
import Image from "next/image";
import style from "./navbar.module.css";
import Sidenav from "./sidenav";
import { useState } from "react";

const Menu = () => {
  const [navopen, setnavopen] = useState(false);
  return (
    <div className={style.menu} onClick={() => setnavopen(!navopen)}>
      <Image src={"/icons/menu.svg"} height={50} width={50} alt="menu" />
      {navopen && <Sidenav close={() => setnavopen(false)} />}
    </div>
  );
};

export default Menu;
