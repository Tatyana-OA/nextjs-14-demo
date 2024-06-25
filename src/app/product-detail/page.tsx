import React, { Suspense } from "react";
import Product from "../components/Product";
import Reviews from "../components/Reviews";

const ProductDetail = () => {
  return (
    <div>
      <h1>Product Detail</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <Product />
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductDetail;
