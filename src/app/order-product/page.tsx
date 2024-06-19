"use client";

import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  //Programmatically route to a desired route
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing order.");
    router.push("/");
    //router.replace("/")
    //router.back()
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default OrderProduct;
