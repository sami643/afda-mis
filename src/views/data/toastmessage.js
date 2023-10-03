import {
  CButton,
  CToast,
  CToaster,
  CToastHeader,
  CToastBody,
} from "@coreui/react";
import { useEffect, useRef, useState } from "react";
export const ToastMessage = (triggerToast) => {
  const [toast, addToast] = useState(0);
  const toaster = useRef();
  const exampleToast = (
    <CToast className="bg-info">
      <CToastHeader>
        <svg
          className="rounded me-2"
          width="20"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        ></svg>
        <div className="" style={{ fontSize: "22px" }}>
          ✔️بریا!{" "}
        </div>
      </CToastHeader>
      <CToastBody
        className="text-center"
        style={{ fontSize: "18px", textAlign: "center" }}
      >
        ستاسو د فورم ډیتا ثبت شوه!
      </CToastBody>
    </CToast>
  );

  return (
    <div>
      <CToaster ref={toaster} push={toast} placement="top-center" />
    </div>
  );
};
