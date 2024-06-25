import "server-only"; // will cause error if used in a client compnent

export const serverSideFunction = () => {
  // Message will be visible in terminal console, not in browser
  console.log(`use multiple libraries,
        use environment variables,
        interact with a database,
        process confidential info`);
  return "server result";
};
