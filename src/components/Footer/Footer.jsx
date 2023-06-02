import FooterLogo from "../../images/logo/logoblack1.png";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left md1000:w-full">
            <div className="flex flex-col w-1/3 gap-8 md1000:w-full md1000:items-center">
              <img src={FooterLogo} alt="Footer Logo" className="w-[18rem] " />
              <p className="text-[18px] font-medium text-[#646464]">
                Transform Your Life - Empower Your Body, Ignite Your Passion for
                Fitness.
              </p>
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full  hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full  hover:bg-[#ff0366] hover:text-white"
                ></i>
              </div>
              <p className="text-[16px] font-medium text-[#646464] md1000:text-center">
                Privacy Policy | © {new Date().getFullYear} IronCore <br />
                Design by
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nicepage.com/website-design"
                >
                  &nbsp; - NicePage Inc
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] hover:text-[ff0366] cursor-pointer text-[#646464] font-medium hover:ont-bold">
                The Ride
              </p>
              <p className="text-[16px] hover:text-[ff0366] cursor-pointer text-[#646464] font-medium hover:ont-bold">
                Yoga Body Sculpt
              </p>
              <p className="text-[16px] hover:text-[ff0366] cursor-pointer text-[#646464] font-medium hover:ont-bold">
                Fat Burning Pilates
              </p>
              <p className="text-[16px] hover:text-[ff0366] cursor-pointer text-[#646464] font-medium hover:ont-bold">
                Power Pump
              </p>
              <p className="text-[16px] hover:text-[ff0366] cursor-pointer text-[#646464] font-medium hover:ont-bold">
                Core Conditioning
              </p>
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                08:00 - 22:00
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                09:00 - 23:00
              </p>
              <p className="text-[16px] text-[#646464] font-bold">
                Sunday - Closed
              </p>
            </div>

            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
