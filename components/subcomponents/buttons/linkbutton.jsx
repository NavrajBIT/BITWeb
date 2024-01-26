import Link from "next/link";
import style from "./button.module.css";
import Image from "next/image";

const Linkbutton = ({ title, href }) => {
  return (
    <Link
      href={href}
      className={style.primarybutton}
      target="blank"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateY(1rem)",
      }}
    >
      {title}
      <Image
        src={"/icons/arrow-right.svg"}
        height={20}
        width={30}
        alt={title}
      />
    </Link>
  );
};

export default Linkbutton;
