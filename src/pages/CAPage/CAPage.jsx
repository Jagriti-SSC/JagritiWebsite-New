import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./CAPage.css";
import CAForm from "../../components/CA Form/Ca-Form";
import Footer from "../../components/footer/Footer";

const CAPage = () => {
  const formRef = useRef(null);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (formRef.current && divRef.current) {
      divRef.current.style.height = `${formRef.current.clientHeight + 100}px`;
    }
  }, []);

  useEffect(() => {
    document.title = "Campus Ambassador Program | Jagriti IIT (BHU)";
  }, []);

  return (
    <>
      <div ref={divRef} className="ca-wrapper">
        <CAForm ref={formRef} />
        <div className="skewed-bg" />
      </div>
      <Footer />
    </>
  );
};

export default CAPage;
