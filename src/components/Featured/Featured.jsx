import React from "react";
import BgSplash from "../../images/who-we-are/title-bg2.png";
import MainButton from "../MainButton";

function Featured() {
  return (
    <>
      <section id="featured" className="page-padding py-[12.5rem] bg-white">
        <div className="container">
          <div className="flex flex-col text-center items-center relative">
            <p className="font-semibold text-white text-[15px] relative uppercase z-10 md1000:pb-[0px] md1000:-top-[4.3rem] md1000:max-w-xs">
              THe Most popular classes
            </p>
            <img
              src={BgSplash}
              alt="s"
              className=" w-[30%] absolute -top-[9rem] md1000:w-[80%]"
            />
            <h2 className="pt-12 text-[3.6rem] text-black font-bold my-8">
              Don't waste time, join us now!
            </h2>
          </div>
          {/* grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 md1000:flex md1000:flex-col">
            <div className="item-0-div relative">
              <div className="item-0 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Boxing</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Monday: 10:00-11:00
                </p>
              </div>
            </div>
            <div className="item-1-div relative">
              <div className="item-1 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">The Ride</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Tuesday: 14:00-15:00
                </p>
              </div>
            </div>
            <div className="item-2-div relative">
              <div className="item-2 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[2.5rem] font-bold">
                  Fat Burning Pilates
                </p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5 text-center">
                  Wednesday: 18:00-19:00
                </p>
              </div>
            </div>
            <div className="item-3-div relative">
              <div className="item-3 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Lifting</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Wednesday: 16:00-17:00
                </p>
              </div>
            </div>
            <div className="item-4-div relative">
              <div className="item-4 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[2.5rem] font-bold">
                  Core Conditioning
                </p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5 text-center">
                  Thursday: 18:00-19:00
                </p>
              </div>
            </div>
            <div className="item-5-div relative">
              <div className="item-5 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">PowerPump</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Saturday: 13:00-14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  cta */}

      <div className="featured-cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#ff0366]">
        <div className="container page-padding ">
          <div className="flex items-center md1000:flex-col md1000:gap-12 md1000:text-center">
            <h2 className="text-white font-bold text-[3.7rem] md1000:text-[3rem] max-w-6xl px-7 laeding-[1.2] min450:text-[2.4rem]">
              Ignite Your Inner Strength <br /> Shape Your Future!
            </h2>
            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="Start Now!"
              arrowColor={`text-black`}
              goTo="/contact"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
