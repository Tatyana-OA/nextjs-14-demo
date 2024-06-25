"use client";
import React, { useState } from "react";

const AboutClient = () => {
  const [name, setName] = useState("Pesho");
  console.log("You'll see me in browser console!");
  return (
    <>
      <div>About Me - Client Side {name}</div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default AboutClient;
