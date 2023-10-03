import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="me-1">Owner: </span>

        <a href="#" rel="noopener noreferrer">
          Afghanistan food and drug authority
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by: </span>
        <a href="#" rel="noopener noreferrer">
          AFDA Software Developers
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
