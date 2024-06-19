import Link from "next/link";
import React from "react";

const ProductList = () => {
  const productId = 100;
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        {/* History replacement */}
        <Link href="products/3" replace={true}>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>{`Product ${productId}`}</Link>
      </h2>
    </div>
  );
};

export default ProductList;
