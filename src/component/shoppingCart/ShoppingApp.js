import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { ClockLoader } from "react-spinners";

function ShoppingApp() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div>
        <h1>Shopping App</h1>
      </div>
      {products.length === 0 ? (
        <ClockLoader color="#36d7b7" />
      ) : (
        <div>
          {products.map((eachProduct) => {
            return <Product product={eachProduct} />;
          })}
        </div>
      )}
    </div>
  );
}
export default ShoppingApp;
