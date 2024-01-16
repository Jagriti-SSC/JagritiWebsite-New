import React, { useEffect } from "react";
import Faq from "../../components/Faq/Faq";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const FaqPage = () => {
  useEffect(() => {
    document.title = "FAQs | Jagriti IIT (BHU)";
  }, []);

  return (
    <>
      <Faq></Faq>
      <Footer />
    </>
  );
};

export default FaqPage;
