import React from "react";
import MainButton from "../MainButton";

function PricingBox({ img, price, text1, text2, text3, title }) {
  return (
    <>
      <div className="flex flex-col w-1/3 md:1000w-[40rem] bg-white shadow-xl relative md1000:w-full">
        <div
          className="relative grayscale hover:grayscale-0"
          style={{ transition: "all 0.3s" }}
        >
          <img src={img} alt="image" className="w-full h-full md1000:hidden" />
          <div className="absolute bg-white text-[22px] font-bold w-[25rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto md1000:w-auto">
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          <p className="text-center text-[30px] font-bold relative py-[10px]">
            <span className="text-[24px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
              $
            </span>
            {price}
            <span className="text-[18px] text-[#6d6d6d] absolute font-normal bottom-[16px] -right-[10rem]">
              per month
            </span>
          </p>
          <div className="flex flex-col text-[16px] font-medium text-center gap-11 text-[#646464]">
            <p>Access to personal trainers</p>
            <p>Use of exercise equipment</p>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
          </div>
          <MainButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;
