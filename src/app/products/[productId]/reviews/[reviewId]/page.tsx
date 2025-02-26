"use client";
import React from "react";
import { notFound } from "next/navigation";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  // Simulating Error
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading Review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for Product {params.productId}
    </div>
  );
};

export default ReviewDetail;
