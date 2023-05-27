import React from "react";
import FeedBackIcon from "../../images/feedback/feedback-icon.png";
import ReviewLogo from "../../images/feedback/review.png";

function FeedBackBox({ text, name, job }) {
  return (
    <div className="absolute flex flex-col bg-black  top-0 right-0 w-[60%] md1000:w-full h-full py-[25px] px-[45px] min540:py-[24px] min540:px-[30px] min540:h-[40rem] min375:h-[50rem]">
      <img alt="quote_img" src={ReviewLogo} className="w-[4rem]" />
      <p className=" text-[16px] italic text-[#dedede] my-6 ml-10 z-10">
        {text}
      </p>
      <h3 className="text-white text-[18px] -mb-[5px] font-bold ml-7">
        {name}
      </h3>
      <p className="text-[14px] font-medium text-[#dedede] ml-4 ">{job}</p>
      <img
        alt="box_img"
        src={FeedBackIcon}
        className="w-[13rem] absolute bottom-0 right-[13.5rem] invert opacity-40"
      />
    </div>
  );
}

export default FeedBackBox;
