"use client";

import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <>
      <button onClick={reset}> Try Again </button>
      <div>{error.message}</div>
    </>
  );
};

export default ErrorBoundary;
