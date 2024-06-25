import "client-only"; // build will fail if used in server component

export function clientSideFunction() {
  console.log(`use window object, local storage
        and any browser-specific feature`);

  return "client result";
}
