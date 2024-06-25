import fs from "fs";
import React from "react";

const ServerCompTwo = () => {
  // Adding a server-only operation - file read
  fs.readFileSync(
    "C:/Users/ASENOTAT/Learning/NextJs_Course/my-app/src/app/components/ServerCompTwo.tsx",
    "utf-8"
  );
  return <div>ServerCompTwo</div>;
};

export default ServerCompTwo;
