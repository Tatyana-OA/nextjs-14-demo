"use client";
import React, { useState } from "react";
import ClientCompTwo from "./ClientCompTwo";
import ServerCompOne from "./ServerCompOne";

const ClientCompOne = ({ children }: { children?: React.ReactNode }) => {
  //Client only operation
  const [name, setName] = useState("Batman");
  return (
    <div>
      ClientCompOne
      <ClientCompTwo />
      {/* Server Component Inside a Client Component  */}
      {/* Component gets rendered as "client". 
      Client components are rendered after server components */}
      {/* <ServerCompOne /> */}
      {/* --------------------------
      ---------------------------------
      */}
      {/* A "Hack" to envoke a server component - props */}
      {children}
    </div>
  );
};

export default ClientCompOne;
