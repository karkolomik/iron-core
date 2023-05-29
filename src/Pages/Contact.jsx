import React from "react";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>
        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
              Unleash the Next Level of Health and Body Transformation
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
              We are a premier fitness center dedicated to helping you achieve
              your health and wellness goals. Our gym offers a wide range of
              state-of-the-art equipment, expert trainers, and diverse workout
              classes to ensure you have a rewarding fitness experience.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Kyiv, Ukraine</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                  Business Center Coliseum, 8th Floor,
                  <br /> Kyiv, Ukraine
                </p>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Opening Hours</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Monday - Friday: 7:30 — 23:00</p>
                  <p>Saturdau - Sunday: 9:00 am — 22:00</p>
                </div>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+380-93-0217968</p>
                  <p>&nbsp; karkolom@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[18px] font-medium text-black flex gap-5">
                  <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
            <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
            <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
            ></input>
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option>Select Class</option>
              <option>PowerPump</option>
              <option>Boxing</option>
              <option>The Ride</option>
              <option>Aerobics</option>
              <option>Pilates</option>
              <option>Cycling</option>
            </select>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              Ready to start
            </button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81287.13849710806!2d30.4168553360792!3d50.45557050908081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef1f07f4a1d%3A0xc99a2d2ca4ef9d5e!2s101%20Tower!5e0!3m2!1sru!2sua!4v1685384659067!5m2!1sru!2sua"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "45rem", border: "0px" }}
        ></iframe>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
