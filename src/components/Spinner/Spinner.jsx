import Loader from "react-loader-spinner";
import React from "react";

const Spinner = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={200}
      width={200}
      // timeout={3000}
    />
  );
};

export default Spinner;
