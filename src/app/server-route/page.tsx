import { serverSideFunction } from "../../utils/server-utils";

const ServerPage = () => {
  const result = serverSideFunction();
  return (
    <div>
      ServerPage
      <p>{result}</p>
    </div>
  );
};

export default ServerPage;
