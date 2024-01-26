import Dropdown from "@/components/subcomponents/dropdown/dropdown";
import style from "./products.module.css";
import productdata from "@/components/subcomponents/productdata";
import Link from "next/link";

const Usecases = () => {
  return (
    <Dropdown>
      <div className={style.productscontainer}>
        {Object.keys(productdata).map((product, index) => (
          <Product
            title={product}
            tagline={productdata[product]["tagline"]}
            im={productdata[product]["im"]}
            key={"nav-2-" + index}
          />
        ))}
      </div>
    </Dropdown>
  );
};

export default Usecases;

const Product = ({ title, tagline, im }) => {
  return (
    <Link className={style.product} href={`#${title}`}>
      <div>
        <div className={style.producttitle}>{title}</div>
        {/* <div className={style.productdescription}>{tagline}</div> */}
      </div>
      {/* <div>
        <Image src={im} height={80} width={80} />
      </div> */}
    </Link>
  );
};
