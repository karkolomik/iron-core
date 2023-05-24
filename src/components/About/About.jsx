import AboutCards from "./AboutCards";
import MainButton from "../MainButton";
import ExerciseIcon from "../../images/who-we-are/exercise.png";
import ShapeIcon from "../../images/who-we-are/fitness-ball.png";
import TeamIcon from "../../images/who-we-are//gymnastics.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import FeelingFree from "../../images/who-we-are/FeelingFree2.png";
import FeelingFreeText from "../../images/who-we-are/FeelingFreeText2.png";
import BgLogo from "../../images/who-we-are/title-bg2.png";

import React from "react";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          <div className="about-cards flex gap-10 -mt-[08.5rem] md1000:flex-col">
            <AboutCards />
          </div>
          <div
            id="about"
            className="grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            <div className="mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md1000:pl-0 mb-12">
                why us ?
              </p>
              <img
                src={BgLogo}
                alt=""
                className="w-[25%] absolute top-[-24px] md1000:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
                Unleash the Next Level of Health and Body Transformation
              </h2>
              <p className="text-[16px] text-[#646464] font-medium">
                Our Dedicated Professionals are Equipped with the Knowledge and
                Experience to Tailor a Personalized Fitness Plan that Will
                Propel You towards Achieving Your Desired Results.
              </p>
              <div className="flex mt-12 mb-[7rem] gap-[2px] min620:flex-col">
                <div className="flex flex-col items-center text-center py-10 px-14 pl-7 min620:px-0">
                  <img
                    src={TeamIcon}
                    alt="group"
                    className={`w-[5.4rem] mb-6 auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professionals <br /> near
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none">
                  <img
                    src={ExerciseIcon}
                    alt="exercise"
                    className={`w-[5.4rem] mb-6 auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    workout <br /> gear
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <img
                    src={ShapeIcon}
                    alt="shape"
                    className={`w-[5.4rem] mb-6 auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    innovative <br /> techniques
                  </h3>
                </div>
              </div>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#3f3f3f]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FF0336]`}
                text="explore more"
                goTo="/classes"
              />
            </div>
            <div className="relative md1000:hidden">
              <img src={FeelingFree} alt="flying" className="girl-flying" />
              <img src={GirlRedBg} alt="flying" className="girl-bg" />
              <img src={FeelingFreeText} alt="flying" className="girl-text" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
