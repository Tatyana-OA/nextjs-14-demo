"use client";

import React from "react";

//Errors bubble up to the closest parent error boundary

const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <>
      <div>{error.message}</div>
    </>
  );
};

export default ErrorBoundary;
