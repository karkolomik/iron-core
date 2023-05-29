import React from "react";
import MainButton from "../MainButton";

function CtaBanner() {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[7rem] text-white">
          <h2 className="text-[36px] font-bold">Ready to Start?</h2>
          <h3 className="text-[28px] font-bold mb-20">
            <span className="text-[#ff0336]">Call now: </span>
            +380 93 021 7968
          </h3>
          <MainButton
            color={`text-white`}
            bg={`bg-[#ff0336]`}
            text="Contact Now"
            arrowColor={`text-white`}
            cN="pricing-cta cta-banner-btn"
            goTo="/contact"
          />
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
