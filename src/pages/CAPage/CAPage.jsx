import React, { useLayoutEffect, useRef } from "react";
import "./CAPage.css";
import CAForm from "../../components/CA Form/Ca-Form";

const CAPage = () => {
  const formRef = useRef();
  const divRef = useRef();

  useLayoutEffect(() => {
    divRef.current.style.height = `${formRef.current.clientHeight + 100}px`;
  }, [formRef, divRef]);

  return (
    <div ref={divRef} style={{ position: "relative" }}>
      <CAForm ref={formRef} />
      <div className="skewed-bg" />
    </div>
  );
};

export default CAPage;
