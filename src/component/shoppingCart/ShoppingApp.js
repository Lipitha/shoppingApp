import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { ClockLoader } from "react-spinners";
import Cart from "./Cart";

function ShoppingApp() {
  const [products, setProducts] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);

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

  const gatherCartInformation = (selectedProduct) => {
    // console.log("parent component", selectedProduct);
    setCardDetails((preState)=>{
      return [
        ...preState,
        selectedProduct
      ]
    }
    )
  };

  return (
    <div>
      <div>
        <h1>Shopping App</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          {products.length === 0 ? (
            <ClockLoader color="#36d7b7" />
          ) : (
            <div>
              {products.map((eachProduct) => {
                return <Product key={eachProduct.id} product={eachProduct} gatherCartInformation={gatherCartInformation} />;//call back function-passing parent to child
              })}
            </div>
          )}
        </div>
        <div style={{ border: "1px solid lightgreen", width: "30%" }}>
          <Cart cartDetails ={cardDetails}/>
        </div>
      </div>
    </div>
  );
}
export default ShoppingApp;
