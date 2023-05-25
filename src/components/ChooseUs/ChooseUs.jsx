import React from "react";
import MainButton from "../MainButton";
import BgLogo from "../../images/choose-us/title-bg2.png";
import NumberOne from "../../images/choose-us/1.png";
import Gym from "../../images/choose-us/gym.png";
import WithLove from "../../images/choose-us/fitness.png";
import TeamWork from "../../images/choose-us/help.png";
import PlayIcon from "../../images/choose-us/play.png";
import VideoImage from "../../images/choose-us/VideoFrame3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section py-[12rem]">
        <div className="container page-padding flex flex-row md:1000-flex-col md:1000-items-center gap-[7rem]">
          <div className="video-div relative w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center ">
            <img
              src={VideoImage}
              alt="video"
              className="relative w-[94%] h-auto"
            />
            <img
              src={PlayIcon}
              alt="play"
              className="absolute w-[2.4rem] top-[42%] left-[44%] z-10 cursor-pointer min450:left-[47%] min450:top-[44%]"
            />
            <span className="bg-white cursor-pointer p-14 absolute rounded-full top-[38.7%] left-[39.9%]"></span>
          </div>

          <div className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-14">
              our benefits
            </p>
            <img
              src={BgLogo}
              alt="bg"
              className="w-[20rem] absolute -top-[42px] -left-14 md:1000:hidden"
            />
            <h2 className="text-[3.6rem] text-white font-bold leading-[1.2] max-w-3xl md1000:max-w-[80%]">
              Discover the Difference: Your Journey to Fitness Excellence Starts
              Here
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl md1000:max-w-[80%]">
              <b>IronCore</b> provides a unique and exceptional fitness
              experience that sets us apart from the rest. Here's why you should
              choose us:
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 min450:flex min450:flex-col">
              <div className="flex items-ceneter gap-6">
                <img
                  src={TeamWork}
                  alt="image"
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Supportive Community
                </p>
              </div>

              <div className="flex items-ceneter gap-6">
                <img
                  src={WithLove}
                  alt="image"
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Flexible Memberships
                </p>
              </div>

              <div className="flex items-ceneter gap-6">
                <img
                  src={NumberOne}
                  alt="image"
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Expert Trainers
                </p>
              </div>

              <div className="flex items-ceneter gap-6">
                <img
                  src={Gym}
                  alt="image"
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Customized Programs
                </p>
              </div>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#595959]`}
                text="explore classes"
                arrowColor={`!text-white`}
                cN="choose-cta"
                hover={`hover:bg-[#ff0336]`}
                goTo="/classes"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
