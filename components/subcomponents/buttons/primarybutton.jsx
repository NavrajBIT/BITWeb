import style from "./button.module.css";
import Link from "next/link";

const Button = ({ title, variant, target }) => {
  return (
    <Link
      className={
        variant === "primary" ? style.primarybutton : style.secondarybutton
      }
      href={target ? `#${target}` : "/"}
      // scroll={false}
    >
      {title}
    </Link>
  );
};

export default Button;
