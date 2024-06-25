import fs from "fs";
import React from "react";
import ServerCompTwo from "./ServerCompTwo";
import ClientCompOne from "./ClientCompOne";

const ServerCompOne = () => {
  // Adding a server-only operation - file read
  fs.readFileSync(
    "C:/Users/ASENOTAT/Learning/NextJs_Course/my-app/src/app/components/ServerCompOne.tsx",
    "utf-8"
  );
  return (
    <div>
      ServerCompOne
      <ServerCompTwo />
      {/* Client Component Within a Server Component */}
      <ClientCompOne />
    </div>
  );
};

export default ServerCompOne;
