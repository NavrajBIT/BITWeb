import style from "./navbar.module.css";
import Image from "next/image";
import productdata from "../subcomponents/productdata";

const Sidenav = ({ close }) => {
  return (
    <div className={style.sidenavcontainer} onClick={close}>
      <div className={style.sidenav}>
        <div className={style.sidenavheading}>Products</div>
        {Object.keys(productdata).map((product, index) => (
          <Product
            title={product}
            tagline={productdata[product]["tagline"]}
            im={productdata[product]["im"]}
            key={"nav-" + index}
          />
        ))}
        <div className={style.sidenavheading}>About Us</div>
        <Product title="About Us" />
        <Product title="Our Team" />
        <Product title="Our Partners" />
        <Product title="Roadmap" />
        <Product title="Tokenomics" />
      </div>
    </div>
  );
};

export default Sidenav;

const Product = ({ title, tagline, im }) => {
  return (
    <div className={style.product}>
      <div>
        <div className={style.producttitle}>{title}</div>
        <div className={style.productdescription}>{tagline}</div>
      </div>
      {im && (
        <div>
          <Image src={im} height={80} width={80} alt={title} />
        </div>
      )}
    </div>
  );
};
