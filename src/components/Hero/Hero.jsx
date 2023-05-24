import React from "react";
import MainButton from "../MainButton";
import BgLogo from "../../images/who-we-are/title-bg2.png";

function Hero() {
  return (
    <>
      <section className="hero-section w-full h-screen min800:flex min:800-justify-center min800:text-center">
        <div className="container-hero">
          <div
            className="flex flex-col text-white
           absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]"
          >
            <p className="text-black text-[20px] uppercase font-medium relative z-10 pl-16 m-8 mr-8 min800:pl-0 mb-8">
              &nbsp; it's time to &nbsp;
            </p>
            <img
              src={BgLogo}
              alt="s"
              className=" w-[44%] absolute -top-10 left-8 title-white min800:w-[24rem] "
            />
            <h1 className="font-bold text-[48px] uppercase mb-[4rem] min450:text-[40px] mt-20">
              &nbsp;&nbsp;dedicate yourself <br /> towards fitness
            </h1>

            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="our classes"
              goTo="/classes"
            />
          </div>
        </div>
        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center min800:hidden"
        >
          <p className="uppercase text-3xl font-bold tracking-widest">
            our socials
          </p>
          <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7">
            <i className="fa-brands fa-facebook rotate-90 hover:text-[#ff0366] text-3xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands fa-twitter rotate-90 hover:text-[#ff0366] text-3xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands fa-linkedin rotate-90 hover:text-[#ff0366] text-3xl cursor-pointer ease-in duration-200"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
