"use client";
import { useEffect } from "react";

const ColorChanger = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      let nav = document.getElementById("navbar");
      if (window.scrollY > 50) {
        nav.style.backgroundColor = "#1d1d1f";
      } else {
        nav.style.backgroundColor = "transparent";
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ColorChanger;
