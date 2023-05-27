import React, { useState } from "react";

function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0 || isNaN(weight) || isNaN(height)) {
      alert("Please enter your weight and height for calculation!");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBMI(bmi.toFixed(1));
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return (
    <>
      <section className="bmi-section py-[4rem] relative">
        <div className="container page-padding">
          <span className="w-full h-full absolute bg-transparent min620:bg[#00000063] top-0 left-0"></span>
          <div className=" w-[35rem] min620:w-[100%] relative right-28">
            <h2 className="text-[3rem] font-bold leading-[1.1] mb-8 text-[#1616167d]">
              Calculate your <br />
              <span className="text-[#f00336]">Body Mass Index</span>
            </h2>
            <p className="text-[18px] text-[#1616167d] font-medium min620:text-white drop-shadow-md">
              Tryout our BMI measurment tool to assume your goals!
            </p>
            <div className="flex flex-col">
              <form className="flex w-full gap-8 h-[50px] mt-10 text-[#f00336]">
                <input
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-[100%] bg-transparent text-[14px] border-2 border-[#1a19197d] pl-10 min450:bg-white min450:text-black"
                  type="text"
                  placeholder="Height / cm"
                />
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-[100%] bg-transparent text-[14px] border-2 border-[#1a19197d] pl-10 min450:bg-white min450:text-black"
                  type="text"
                  placeholder="Weight / kg"
                />
              </form>

              <p className="mt-10 gap-3 text-[18px] text-black font-bold drop-shadow-3xl flex items-center w-full">
                <span className="w-1/2 ">
                  Your BMI is: &nbsp;
                  <span className="text-[#ff0336]">{BMI}</span>
                </span>
                <span className="w-1/2  whitespace-nowrap">
                  Your weight is: &nbsp;
                  <span className="text-[#ff0336]">{message}</span>
                </span>
              </p>
              <button
                onClick={calcBmi}
                style={{ transition: "all 0.3s" }}
                type="submit"
                className="text-[15px] text-white uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#ff0336]"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BMI;
