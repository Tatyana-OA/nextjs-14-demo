import React from "react";

const Reviews = async () => {
  // Intentionally delaying the resolution
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Reviews</div>;
};

export default Reviews;
