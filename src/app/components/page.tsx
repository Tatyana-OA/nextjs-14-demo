import { serverSideFunction } from "../../utils/server-utils";

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
