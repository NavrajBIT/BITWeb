import productdata from "../productdata";
import style from "./product.module.css";
import Image from "next/image";
import Linkbutton from "../buttons/linkbutton";

const Product = ({ title, orientation }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
        textAlign: "center",
      }}
    >
      <div
        className={
          orientation === "left"
            ? style.titlecontainerleft
            : style.titlecontainerright
        }
      >
        <div>
          <div className={style["gradienttext"]}>{title}</div>
          <div>{productdata[title]["tagline"]}</div>
          <Linkbutton title={"Launch App"} href={productdata[title]["link"]} />
        </div>
        <Image
          src={productdata[title]["im"]}
          height={300}
          width={300}
          className={style.productimage}
          alt={"BIT"}
        />
        <div style={{ maxWidth: "var(--max-width-content)" }}>
          {productdata[title]["desc"]}
        </div>
      </div>
      <div className={style.usecases}>
        {productdata[title]["usecases"].map((usecase, index) => (
          <Usecard
            title={usecase.title}
            desc={usecase.desc}
            im={usecase.im}
            key={title + "index"}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;

const Usecard = ({ title, desc, im }) => (
  <div
    className={style.usecasecontainer}
    style={{
      backgroundImage: `url('${im}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className={style.usecasetitle}>{title}</div>
    <div className={style.usecasedesc}>{desc}</div>
  </div>
);
