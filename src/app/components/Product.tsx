import React from "react";

const Product = async () => {
  // Intentionally delaying the resolution
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product</div>;
};

export default Product;
