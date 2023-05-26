import React from "react";
import TrainersBox from "./TrainersBox";
import BgLogo from "../../images/who-we-are/title-bg2.png";

function Trainers() {
  return (
    <>
      <section id="team" className="trainers-section">
        <div className="container page-padding py-[12rem]">
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
              fitness <br /> instructors
            </p>
            <img
              src={BgLogo}
              alt="Bg"
              className="w-[26rem] absolute -top-[40px]"
            />
            <h2 className="text-[3.4rem] font-bold mb-4">
              Only team of experts
            </h2>
            <p className="text-[#353434] font-bold drop-shadow-l text-[15px]">
              Fitness experts possess extensive knowledge and expertise in{" "}
              <br />
              various aspects of physical fitness, exercise, and health.
            </p>
          </div>

          <div className="flex mt-20">
            <TrainersBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
