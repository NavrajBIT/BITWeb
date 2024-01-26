import Dropdown from "@/components/subcomponents/dropdown/dropdown";
import style from "./products.module.css";
import Link from "next/link";

const About = () => {
  return (
    <Dropdown>
      <div className={style.productscontainer}>
        <Product title="Our Vision" id="mission" />
        <Product title="Our Team" id="team" />
        <Product title="Our Partners" id="partners" />
        <Product title="Roadmap" id="roadmap" />
        <Product title="Tokenomics" id="tokenomics" />
      </div>
    </Dropdown>
  );
};

export default About;

const Product = ({ title, id }) => {
  return (
    <Link className={style.product} href={`#${id}`}>
      <div>
        <div className={style.producttitle}>{title}</div>
      </div>
    </Link>
  );
};
