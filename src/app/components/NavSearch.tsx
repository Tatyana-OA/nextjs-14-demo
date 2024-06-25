// Use Client will make all children of the component client-side as well
"use client";

import React from "react";
import { useState } from "react";

export const NavSearch = () => {
  const [search, setSearch] = useState("");

  console.log(`NavSearch rendered`);
  return <div>Nav search input</div>;
};
