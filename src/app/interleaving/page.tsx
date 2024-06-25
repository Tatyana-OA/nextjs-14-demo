import React from "react";
import ServerCompOne from "../components/ServerCompOne";
import ClientCompOne from "../components/ClientCompOne";

const InterLeaving = () => {
  return (
    <div>
      <h1>Interleaving page</h1>
      <ServerCompOne />
      <ClientCompOne>
        <ServerCompOne />
      </ClientCompOne>
    </div>
  );
};

export default InterLeaving;
