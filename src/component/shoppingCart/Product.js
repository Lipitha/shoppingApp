function Product({ product,gatherCartInformation }) {
  // const { product } = props;
  const addCart = (selectedProduct) => {
    gatherCartInformation(selectedProduct);
  };

  return (
    <div
      style={{
        border: "1px solid lightGreen",
        borderRadius: "7px",
        marginBottom: "10px",
      }}
    >
      <h3>{product.title}</h3>
      <img
        src={product.image}
        alt="productImage"
        style={{ height: "100px", width: "100px" }}
      />
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      <p>
        Ratings: {product.rating.rate}/5 ({product.rating.count})
      </p>
      <button
        onClick={() => {
          addCart(product);
        }}
        style={{
          width: "40%",
          marginBottom: "5px",
          backgroundColor: "lightgreen",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Add Cart
      </button>
    </div>
  );
}
export default Product;
