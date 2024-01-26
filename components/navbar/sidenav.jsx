import style from "./navbar.module.css";
import Image from "next/image";
import productdata from "../subcomponents/productdata";
import Link from "next/link";

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
            id={product}
          />
        ))}
        <div className={style.sidenavheading}>About Us</div>
        <Product title="About Us" id={"mission"} />
        <Product title="Our Team" id="team" />
        <Product title="Our Partners" id="partners" />
        <Product title="Roadmap" id={"roadmap"} />
        <Product title="Tokenomics" id={"tokenomics"} />
      </div>
    </div>
  );
};

export default Sidenav;

const Product = ({ title, tagline, im, id }) => {
  return (
    <Link className={style.product} href={`#${id}`}>
      <div>
        <div className={style.producttitle}>{title}</div>
        <div className={style.productdescription}>{tagline}</div>
      </div>
      {im && (
        <div>
          <Image src={im} height={80} width={80} alt={title} />
        </div>
      )}
    </Link>
  );
};
