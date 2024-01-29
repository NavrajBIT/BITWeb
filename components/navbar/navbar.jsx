import Image from "next/image";
import Navbutton from "../subcomponents/buttons/navbutton";
import Products from "./dropdowns/products";
import Usecases from "./dropdowns/usecases";
import About from "./dropdowns/about";
import ColorChanger from "./colorChanger";
import Menu from "./menu";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div
      id="navbar"
      style={{
        height: "var(--nav-height)",
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "auto",
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--padding-main)",
        }}
      >
        <Image
          src={"/logo.png"}
          height={60}
          width={120}
          alt="Beyond Imagination Technologies"
        />
        <div className={style.navitemscontainer}>
          <Navbutton title="Products" drop={<Products />} />
          <Navbutton title="Use Cases" link="Bitmemoir" />
          <Navbutton title="About" drop={<About />} />
        </div>
        <Menu />
      </div>
      <ColorChanger />
    </div>
  );
};

export default Navbar;
