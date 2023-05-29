import React, { useState } from "react";
import ClasseBox from "../components/ClassesBox/ClasseBox";
import Footer from "../components/Footer/Footer";

function Classes() {
  const [load, setload] = useState(true);

  const loadMore = () => {
    setload(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="login-section text-center">
        <div className="login-banner relative justify-center flec">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>
        <div
          className={`container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left ${
            load ? "grid" : "hidden"
          }`}
        >
          <ClasseBox
            bgImg="cycling-bg"
            title="The Ride"
            trainer="Anastasia Ivanenko"
            date="Tuesday: 14:00-15:00"
          />
          <ClasseBox
            bgImg="boxing-bg"
            title="Boxing"
            trainer="Oleksandr Hryhorenko"
            date="Monday: 10:00-11:00"
          />
          <ClasseBox
            bgImg="lifting-bg"
            title="Lifting"
            trainer="Volodymyr Petrenko"
            date="Wednesday: 16:00-17:00"
          />
          <ClasseBox
            bgImg="aerobics-bg"
            title="Core Conditioning"
            trainer="Mariya Kovalchuk"
            date="Thursday: 18:00-19:00"
          />
          <ClasseBox
            bgImg="zumba-bg"
            title="Zumba Fitness"
            trainer="Yuliya Shevchenko"
            date="Thursday: 12:00-13:00"
          />
          <ClasseBox
            bgImg="HIIT-bg"
            title="HIIT"
            trainer="Mykhailo Zhukovskyi"
            date="Friday: 20:00-21:00"
          />
          <ClasseBox
            bgImg="shaping-bg"
            title="Shaping"
            trainer="Katerina Shevchenko"
            date="Saturday: 11:00-12:00"
          />
        </div>
        <div
          className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
            load ? "hidden" : "grid"
          }`}
        >
          <ClasseBox
            bgImg="cycling-bg"
            title="The Ride"
            trainer="Anastasia Ivanenko"
            date="Tuesday: 14:00-15:00"
          />
          <ClasseBox
            bgImg="boxing-bg"
            title="Boxing"
            trainer="Oleksandr Hryhorenko"
            date="Monday: 10:00-11:00"
          />
          <ClasseBox
            bgImg="lifting-bg"
            title="Lifting"
            trainer="Volodymyr Petrenko"
            date="Wednesday: 16:00-17:00"
          />
          <ClasseBox
            bgImg="aerobics-bg"
            title="Core Conditioning"
            trainer="Mariya Kovalchuk"
            date="Thursday: 18:00-19:00"
          />
          <ClasseBox
            bgImg="powerpump-bg"
            title="PowerPump"
            trainer="Benjamin Thompson"
            date="Saturday: 13:00-14:00"
          />
          <ClasseBox
            bgImg="pilates-bg"
            title="Pilates"
            trainer="Oksana Kovalenko"
            date="Wednesday: 18:00-19:00"
          />
          <ClasseBox
            bgImg="yoga-bg"
            title="Yoga Flow"
            trainer="Anna Lysenko"
            date="Tuesday: 14:00-15:00"
          />
          <ClasseBox
            bgImg="zumba-bg"
            title="Zumba Fitness"
            trainer="Yuliya Shevchenko"
            date="Thursday: 12:00-13:00"
          />
          <ClasseBox
            bgImg="HIIT-bg"
            title="HIIT"
            trainer="Mykhailo Zhukovskyi"
            date="Friday: 20:00-21:00"
          />
          <ClasseBox
            bgImg="shaping-bg"
            title="Shaping"
            trainer="Katerina Shevchenko"
            date="Saturday: 11:00-12:00"
          />
          <ClasseBox
            bgImg="dance-bg"
            title="Dance Fitness"
            trainer="Anastasiya Serhiyenko"
            date="Tuesday: 16:00-17:00"
          />
          <ClasseBox
            bgImg="kickboxing-bg"
            title="Kickboxing"
            trainer="Viktor Yakovenko"
            date="Sunday: 09:00-11:00"
          />
        </div>
        <button
          className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
          onClick={() => {
            loadMore();
            goTop();
          }}
        >
          {load ? "show more" : "show less"}
        </button>
      </section>
    </>
  );
}

export default Classes;
