import React, { useEffect } from "react";

export const DirectionSetterComponent = () => {
  const appDirection = localStorage.getItem("dir");

  useEffect(() => {
    const htmlTag = document.getElementById("main-html");
    if (htmlTag) {
      htmlTag.setAttribute("dir", appDirection); // or 'rtl' based on your condition
    }
  }, []);
};
