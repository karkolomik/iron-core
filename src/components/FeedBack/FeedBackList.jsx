import React from "react";
import Logo1 from "../../images/feedback/logo1.png";
import Logo2 from "../../images/feedback/logo2.png";
import Logo3 from "../../images/feedback/logo3.png";
import Logo4 from "../../images/feedback/logo4.png";
import Logo5 from "../../images/feedback/logo5.png";
import ClientImage from "../../images/feedback/client.jpg";
import BgImage from "../../images/who-we-are/title-bg2.png";
import FeedBackBoxes from "./FeedBackBoxes";

function FeedBackList() {
  return (
    <>
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          {/* title */}
          <div className="text-center relative items-center w-full flex flex-col">
            <p className="text-white relative z-10 text-[20px] uppercase font-bold -mb-[10.5rem]">
              FeedBacks
            </p>
            <img src={BgImage} alt="bg" className="w-[23rem] relative top-14" />
          </div>

          <div className="border-[#efefef] mt-[17rem] md1000:mt-[9rem] bg-white border-solid border-[9px] p-[30px] min540:h-[48rem] min375:h-[60rem]">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              <img
                src={ClientImage}
                alt="Client"
                className="absolute bottom-0 -left-10 z-20 h-[40rem] rounded-tr-[200px] md:1000-hidden"
              />

              <div className="flex">
                <FeedBackBoxes />
              </div>

              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex gap-24 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap
        "
        >
          <img
            src={Logo1}
            alt="logo"
            className="scale-[1] hover:invert h-16"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo2}
            alt="logo"
            className=" hover:invert h-16"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo3}
            alt="logo"
            className="scale-[1.8] hover:invert h-14"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo4}
            alt="logo"
            className="scale-[.8] hover:invert h-16"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo5}
            alt="logo"
            className="scale-[.6] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
        </div>
      </section>
    </>
  );
}

export default FeedBackList;
