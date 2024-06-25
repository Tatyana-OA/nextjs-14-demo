// Third Party Components Depending on client-only features
"use client";

import React from "react";

import { useTheme } from "../components/ThemeProvider";
import { clientSideFunction } from "../../utils/client-utils";

export default function ImageSlider() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <div>
      <h1>Client Only</h1>
      <p>Theme Color: {theme.colors.primary}</p>
      <p>Client Side Function: {result}</p>
    </div>
  );
}
