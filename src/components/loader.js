import React from "react";
import "./style.css";
import { BarLoader } from "react-spinners";
// import "./stylesheet/Loader.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <BarLoader color="#007BFF" loading={true} />
      </div>
    </div>
  );
};

export default Loader;
