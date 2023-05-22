import { Link } from "react-router-dom";

function NavList() {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "none" });
  };
  return (
    <>
      <ul className="flex gap-9 twxt-while text-[16px] font-medium xl:none">
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          <a href="/">Home</a>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          <Link onClick={goTop} to={"/about"}>
            About
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            Gallery
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          <Link onClick={goTop} to={"/schedule/monday"}>
            Schedule
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          <Link onClick={goTop} to={"/blog"}>
            Blog
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          <Link onClick={goTop} to={"/pricing"}>
            Pricing
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          <Link onClick={goTop} to={"/classes"}>
            Classes
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 300ms" }}
        >
          {" "}
          <Link onClick={goTop} to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
