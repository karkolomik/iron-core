import React, { useState } from "react";
import Trainer1 from "../../images/trainers/trainer1.png";
import Trainer2 from "../../images/trainers/trainer2-croped.png";
import Trainer3 from "../../images/trainers/trainer3.png";
import TrainerBg from "../../images/trainers/trainer-bg.png";

function TrainersBox() {
  const [imgHover, setImgHover] = useState(false);

  const hoverBox = () => {
    setImgHover(true);
  };

  const hoverBoxRemover = () => {
    setImgHover(false);
  };

  const trainers = [
    {
      img: Trainer1,
      name: "Oksana Kovalenko",
      job: "Pilates Trainer",
    },
    {
      img: Trainer2,
      name: "Anastasia Ivanenko",
      job: "The Ride Trainer",
    },
    {
      img: Trainer3,
      name: "Benjamin Thompson",
      job: "PowerPump Trainer",
    },
  ];

  return (
    <>
      <div
        className="flex justify-center gap-[6rem] md1200:flex-wrap"
        style={{ margin: "0 auto" }}
      >
        {trainers.map((trainer, id) => (
          <div
            className="relative cursor-pointer w-[35-rem] min450:w-full flex flex-col select-none"
            onMouseEnter={hoverBox}
            onMouseLeave={hoverBoxRemover}
          >
            <img
              src={trainer.img}
              alt="trainer"
              style={{ transition: "all 0.3s" }}
              className={`w-[38rem] z-10 relative grayscale mx-auto ${
                imgHover ? "hover:grayscale-0" : ""
              }`}
            />
            <img
              style={{ transition: "all 0.3s" }}
              src={TrainerBg}
              alt="bg"
              className={`absolute top-[15px] w-full scale-[1.2]`}
            />

            <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px] md1000:w-auto">
              <h3 className="font-bold text-[1.5rem]">{trainer.name}</h3>
              <p className="font-medium text-[1.5rem] text-[#646464] ">
                {trainer.job}
              </p>
              <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem] md1000:w-full md1000:w-auto flex-col">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrainersBox;
