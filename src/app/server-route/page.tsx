import { serverSideFunction } from "../../utils/server-utils";

// In a server route, we can use a client functionality (slider) ONLY if encapsulated

import ImageSlider from "../components/ImageSlider";

const ServerPage = () => {
  const result = serverSideFunction();
  return (
    <div>
      ServerPage
      <p>{result}</p>
      <ImageSlider />
    </div>
  );
};

export default ServerPage;
