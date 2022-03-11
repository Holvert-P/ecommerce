import ProductItem from "../components/ProductItem";
import useGetData from "../hooks/useGetData";
import "../styles/ProductList.scss";
const API = "https://api.escuelajs.co/api/v1/products";
console.log();
const ProductList = () => {
  const products = useGetData(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((item, index) => (
          <ProductItem key={item ? item.id : index} product={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
