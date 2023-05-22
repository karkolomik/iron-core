import { useState } from "react";
import Logo from "../../images/logo/logoblack1.png";
import LogoFooter from "../../images/logo/logowhite1.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };
  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //sidebar
  const sideBarWindow = () => {
    setSideBar(!sideBar);
  };

  //hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12 fixed top-0 let-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            onClick={goTop}
            className="w-full h-auton"
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex item-center gap-10">
          <div className="flex gap-10">
            {/* mobile hamburger menu*/}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[999999] py-[60px] px-[40px] ease-in-out duration-500 ${
                hamburger ? "left-0" : "-left-[100%]"
              }`}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              ></i>
              {/* links for menu*/}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/schedule/monday"
                  >
                    Schedule
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/gallery/page-1"
                  >
                    Gallery
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text[#ff0336] ease-in duration-200"
                    href="/classes"
                  >
                    Classes
                  </a>
                </li>
              </ul>
            </div>
            {/*sidebar*/}
            <div>
              <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[1--vh] bg-white top-0 left-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[500ms] ${
                  sideBar ? "left-0" : "-left-[100%]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <img
                    src={LogoFooter}
                    alt="logo_footer"
                    className="w-[13rem]"
                  />
                  <i
                    onClick={sideBarWindow}
                    className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                  ></i>
                </div>
                {/* about us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae repudiandae in quod amet quae. Culpa sapiente
                    voluptates perferendis totam dicta alias atque beatae,
                    exercitationem quis commodi iusto doloribus cumque ex?
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap4">
                    <img
                      src=""
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src=""
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src=""
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src=""
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src=""
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src=""
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                    <img
                      src=""
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer"
                    />
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in-out duration-200">
                    <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                    &nbsp; Business Center Coliseum, 8th Floor, Kyiv 02140
                    Ukraine
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in-out duration-200">
                    <i className="fa-solid fa-phone text-[#ff0336]"></i>
                    &nbsp; +380 - 93 - 021 - 79 - 68
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in-out duration-200">
                    <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                    &nbsp; IronCore@gmail.com
                  </p>
                </div>
                {/*follow us*/}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[10px] px-[13px] cursor-pointer">
                      <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*hamburger */}
            <i
              onClick={hamburgerMenu}
              className="fa-bars fa-solid hidden text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"
            ></i>
            {/*account */}
            <Link onClick={goTop} to={"/singup"} title="signup_button">
              <i className="fa-regular fa-user text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"></i>
            </Link>
            {/*sidebar */}
            <i
              onClick={sideBarWindow}
              className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"
            ></i>
          </div>
          {/*spinbox */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2 p-2 rounded-md min:620:hidden">
            <Link
              onClick={goTop}
              to={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center"
            >
              <i
                className={`fa-solid fa-plus bg-[#ff0336] text-white text-2xl py-3 px-4 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                }`}
              ></i>
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                Join Class Now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
