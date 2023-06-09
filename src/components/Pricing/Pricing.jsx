import React from "react";
import BgTitle from "../../images/who-we-are/title-bg2.png";
import image1 from "../../images/pricing/1.jpg";
import image2 from "../../images/pricing/2.jpg";
import image3 from "../../images/pricing/3.jpg";
import PricingBox from "./PricingBox";

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] md1000:py-[6rem]">
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[20px] uppercase font-bold mb-8">
              PRICING LIST
            </p>
            <img
              src={BgTitle}
              alt="text-bg"
              className="w-[23rem] absolute -top-[45px]"
            />
            <h2 className="text-[3.4rem] font-bold mb-4">
              Pricing Plan for eveyone!
            </h2>
            <p className="text-[#646464] font-medium text-[19px]">
              Discover our range of membership options designed to suit your
              fitness goals and budget. <br /> We offer flexible plans to ensure
              everyone can find the perfect fit for their fitness journey.
            </p>
          </div>

          <div className="flex gap-8 mt-20 relative z-[2] md1000:flex-col md1000:items-center md1000:w-auto md1000:gap-2">
            <PricingBox
              img={image1}
              price={50}
              text1={"Option to use personal gym locker"}
              title={"Amateur"}
            />
            <PricingBox
              img={image2}
              price={100}
              text1={"Personal coaching"}
              text2={"Regular body composition analysis"}
              text3={"Free bottled water"}
              title={"Pro"}
            />
            <PricingBox
              img={image3}
              price={150}
              text1={"Personal coaching and message"}
              text2={"Regular body composition analysis"}
              text3={"Unlimited access to group fitness classes"}
              title={"Expert"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
