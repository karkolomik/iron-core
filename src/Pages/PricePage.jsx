import React from "react";
import Footer from "../components/Footer/Footer";
import Pricing from "../components/Pricing/Pricing";

function PricePage() {
  return (
    <>
      <section className="logsn-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Pricing List
          </h1>
        </div>
        <Pricing />
        <Footer />
      </section>
    </>
  );
}

export default PricePage;
