"use client";

//Importing a server-only component will cause an error in a client component

import React from "react";
//import { serverSideFunction } from "../../utils/server-utils";

const ClientRoute = () => {
  //const result = serverSideFunction();
  return <div>ClientPage</div>;
};

export default ClientRoute;
