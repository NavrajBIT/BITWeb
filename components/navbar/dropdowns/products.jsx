import Dropdown from "@/components/subcomponents/dropdown/dropdown";
import style from "./products.module.css";
import Image from "next/image";
import productdata from "@/components/subcomponents/productdata";
import Link from "next/link";

const Products = () => {
  return (
    <Dropdown>
      <div className={style.productscontainer}>
        {Object.keys(productdata).map((product, index) => (
          <Product
            title={product}
            tagline={productdata[product]["tagline"]}
            im={productdata[product]["im"]}
            key={"nav-" + index}
          />
        ))}
      </div>
    </Dropdown>
  );
};

export default Products;

const Product = ({ title, tagline, im }) => {
  return (
    <Link className={style.product} href={`#${title}`}>
      <div>
        <div className={style.producttitle}>{title}</div>
        <div className={style.productdescription}>{tagline}</div>
      </div>
      <div>
        <Image src={im} height={80} width={80} alt={title} />
      </div>
    </Link>
  );
};
