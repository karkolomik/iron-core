import { useState } from "react";
import Logo from "../../images/logo/logowhite.png";
import LogoFooter from "../../images/logo/logoblack.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

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
  const sideBarWidow = () => {
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
      </nav>
    </>
  );
}

export default Navbar;
