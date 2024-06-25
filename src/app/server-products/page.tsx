import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const ServerProducts = async () => {
  // Cached by default; improves performance
  const res = await fetch(
    "http://localhost:3001/products",
    { cache: "no-store" } // to opt out of caching
  );
  const products = await res.json();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((p) => {
          return (
            <div key={p.id}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p>{p.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServerProducts;
