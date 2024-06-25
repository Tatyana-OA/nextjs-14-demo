import React from "react";
import { NavLinks } from "./NavLinks";
import { NavSearch } from "./NavSearch";

export const Navbar = () => {
  console.log(`Navbar rendered`);
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
