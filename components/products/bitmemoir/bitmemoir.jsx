import Page from "@/components/subcomponents/containers/page";
import Product from "@/components/subcomponents/product/product";
import productdata from "@/components/subcomponents/productdata";

const Products = () => {
  return (
    <>
      {Object.keys(productdata).map((product, index) => (
        <ProductPage title={product} key={"product-list-" + index} />
      ))}
    </>
  );
};

const ProductPage = ({ title }) => {
  return (
    <Page
      id={title}
      style={{
        background: "var(--bg-light)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      innerStyle={{
        width: "100%",
        gap: "var(--padding-light)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Product title={title} orientation={"left"} />
    </Page>
  );
};

export default Products;
